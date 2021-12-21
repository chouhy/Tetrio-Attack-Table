var tetrioatk = {
    garbage : {
        SINGLE: 0,
        DOUBLE: 1,
        TRIPLE: 2,
        QUAD: 4,
        TSPIN_MINI: 0,
        TSPIN: 0,
        TSPIN_MINI_SINGLE: 0,
        TSPIN_SINGLE: 2,
        TSPIN_MINI_DOUBLE: 1,
        TSPIN_DOUBLE: 4,
        TSPIN_TRIPLE: 6,
        TSPIN_QUAD: 10,
        BACKTOBACK_BONUS: 1,
        BACKTOBACK_BONUS_LOG: .8,
        COMBO_MINIFIER: 1,
        COMBO_MINIFIER_LOG: 1.25,
        COMBO_BONUS: .25,
        ALL_CLEAR: 10
    },
    b2b(btb){
        return tetrioatk.garbage["BACKTOBACK_BONUS"] * (Math.floor(1 + Math.log1p((btb) * tetrioatk.garbage["BACKTOBACK_BONUS_LOG"])) + (btb == 1 ? 0 : (1 + Math.log1p((btb) * tetrioatk.garbage["BACKTOBACK_BONUS_LOG"]) % 1) / 3))
    },
    calAtk(type,btb,cb){
        var atk = tetrioatk.garbage[type];
        if(btb > 0)  atk += tetrioatk.b2b(btb);
        atk *= 1 + tetrioatk.garbage["COMBO_BONUS"] * (cb);
        if(cb > 1) atk = Math.max(Math.log1p(tetrioatk.garbage["COMBO_MINIFIER"] * cb * tetrioatk.garbage["COMBO_MINIFIER_LOG"]), atk);
        return Math.floor(atk);
    }
}
export default tetrioatk