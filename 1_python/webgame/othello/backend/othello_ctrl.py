import copy

from othello import models as M

STONE_EMPTY = 0
STONE_WHITE = 1
STONE_BLACK = 2

E = STONE_EMPTY
W = STONE_WHITE
B = STONE_BLACK

STONE_FIRST = STONE_BLACK
STONE_SECOND = STONE_WHITE

class OthelloControll(object):
    STONES_INIT_2D = [
        [E, E, E, E, E, E, E, E],
        [E, E, E, E, E, E, E, E],
        [E, E, E, E, E, E, E, E],
        [E, E, E, W, B, E, E, E],
        [E, E, E, B, W, E, E, E],
        [E, E, E, E, E, E, E, E],
        [E, E, E, E, E, E, E, E],
        [E, E, E, E, E, E, E, E]
    ]

    FLIPS_INIT_2D = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]

    @staticmethod
    def getStone(game, player):
        if player == game.player1:
            return STONE_FIRST
        elif player == game.player2:
            return STONE_SECOND
        else:
            return None

    @staticmethod
    def getBoard(log):
        if log:
            # ログが存在する場合
            return Board(
                mode=Board.MODE_STR,
                stones=log.stones,
                flips=log.flips
            )
        else:
            # ログが存在しない場合
            return Board(
                mode=Board.MODE_2D,
                stones=OthelloControll.STONES_INIT_2D,
                flips=OthelloControll.FLIPS_INIT_2D
            )

    @staticmethod
    def putStone(board, game, player, turn, posX, posY):
        stone = OthelloControll.getStone(game, player)
        if board.putStone(stone, posX, posY):
            log = M.Log(
                game=game,
                player=player,
                turn=turn,
                isPass=False,
                isSurrender=False,
                posX=posX,
                posY=posY,
                stones=board.stoneStr,
                flips=board.flipStr
            )
            log.save()
            return True
        else:
            return False


class Board(object):
    MODE_2D = "2d"
    MODE_STR = "str"

    STONE_STR = ["E", "W", "B"]
    STONE_NUM = {
        "E": E,
        "W": W,
        "B": B
    }

    VECTORS = [
        ( 0, -1),   # 上
        ( 1, -1),   # 右上
        ( 1,  0),   # 右
        ( 1,  1),   # 右下
        ( 0,  1),   # 下
        (-1,  1),   # 左下
        (-1,  0),   # 左
        (-1, -1)    # 左上
    ]

    def __init__(self, mode, stones, flips=None):
        self._stone2d, self._flip2d = self.__convert_to_2d(mode, stones, flips)
    
    def __convert_to_2d(self, mode, stones, flips):
        stone2d = None
        flip2d = None
        if mode == self.MODE_2D:
            stone2d = stones
            flip2d = flips if flips else [[0 for _ in range(8)] for _ in range(8)]
        if mode == self.MODE_STR:
            stone2d = self.convert_stone_str_to_2d(stones)
            flip2d = self.convert_flip_str_to_2d(flips) if flips else [[0 for _ in range(8)] for _ in range(8)]
        return stone2d, flip2d

    @property
    def stone2d(self):
        return self._stone2d

    @property
    def stoneStr(self):
        return self.convert_stone_2d_to_str(self._stone2d)

    @property
    def flip2d(self):
        return self._flip2d
        
    @property
    def flipStr(self):
        return self.convert_flip_2d_to_str(self._flip2d)

    @staticmethod
    def convert_stone_str_to_2d(stoneStr):
        stone2d = [[] for _ in range(8)]
        for idx, c in enumerate(stoneStr):
            stone2d[idx // 8].append(Board.STONE_NUM[c])
        return stone2d
    
    @staticmethod
    def convert_stone_2d_to_str(stone2d):
        stoneStr = ""
        for row in stone2d:
            for s in row:
                stoneStr += Board.STONE_STR[s]
        return stoneStr
        
    @staticmethod
    def convert_flip_str_to_2d(flipStr):
        flip2d = [[] for _ in range(8)]
        for idx, c in enumerate(flipStr):
            flip2d[idx // 8].append(int(c))
        return flip2d
    
    @staticmethod
    def convert_flip_2d_to_str(flip2d):
        flipStr = ""
        for row in flip2d:
            for f in row:
                flipStr += str(f)
        return flipStr

    def putStone(self, stone, posX, posY):
        """ 石を置いて反転する処理

        Args:
            stone (int)): 置く石の色．[W, B]のいずれか．
            posX (int): 置く位置のＸ座標．[0 - 7]のいずれか．
            posY (int): 置く位置のＹ座標．[0 - 7]のいずれか．

        Returns:
            bool: 石を置くことができたかどうかをTrue/Falseで返す．
        """
        # 置く石の色チェック
        if not (stone == W or stone == B):
            return False
        # 置く位置が空白であることをチェック
        if self._stone2d[posY][posX] != E:
            return False
        else:
            # 反転情報の初期化
            self._flip2d = [[0 for _ in range(8)] for _ in range(8)]
            # 8方向走査
            for (dx, dy) in self.VECTORS:
                # 反転可否の判定
                if self.__canFlipStone(stone, posX, posY, dx, dy):
                    # 石の反転
                    self.__flipStone(stone, posX, posY, dx, dy)
            # 反転があったかどうか
            if sum(map(sum, self._flip2d)) > 0:
                # 反転があった場合，置いた位置の色を変えて，Trueを返却
                self._stone2d[posY][posX] = stone
                self._flip2d[posY][posX] = 9
                return True
            else:
                # 反転がなかった場合，Falseを返却
                return False

    def __canFlipStone(self, stone, posX, posY, dx, dy):
        # カウンタを準備
        cnt = 0
        # 最初の走査位置へ移動
        posX += dx
        posY += dy
        # 走査開始
        while (posX >= 0 and posX < 8 and posY >= 0 and posY < 8):
            if self._stone2d[posY][posX] == E:
                # 空白にたどり着いたらダメ
                return False
            if self._stone2d[posY][posX] == stone:
                # 一つ以上挟んでいたらＯＫ
                return cnt > 0
            else:
                # 挟める石をカウントアップ
                cnt += 1
            # 次の走査位置へ移動
            posX += dx
            posY += dy  
        # 自分の石がなければダメ
        return False
    
    def __flipStone(self, stone, posX, posY, dx, dy):
        # 反転回数記憶カウンタ
        cnt = 1
        # 最初の反転位置へ移動
        posX += dx
        posY += dy
        # 反転開始
        while (posX >= 0 and posX < 8 and posY >= 0 and posY < 8):
            if self._stone2d[posY][posX] == stone:
                # 自分の石になったら終了
                return
            else:
                # 自分の石でなければ反転する（空白でないことは担保されている前提）
                self._stone2d[posY][posX] = stone
                self._flip2d[posY][posX] = cnt
                # 反転回数カウントアップ
                cnt += 1
                # 次の反転位置へ移動
                posX += dx
                posY += dy