const RedisConnect = require('./config/redisConnect');
const data = {
    "Ctxt": {"cou": 1, "date": "20210101", "hip": "", "numJ": 1, "reu": 1}, "Ts": 0, "captures": [{"Ariv": false, "Axl": 0.0, "Capt": "1", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 1, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "2", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 2, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "3", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 3, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "4", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 4, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "5", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 5, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "6", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 6, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "7", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 7, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "8", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 8, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "9", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 9, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}, {"Ariv": false, "Axl": 0.0, "Capt": "10", "Darr": 0, "Dcor": 0, "Dep": false, "DmCo": 0, "DpDp": 0, "Dprm": 0, "DrDp": 0, "Epre": 0, "Eprm": 0, "HedA": 0, "HedR": 0, "LFou": 0, "LMoyFou": 0, "NFou": 0, "NumP": 10, "Pcen": 0, "Pcou": 0, "Plon": 0, "Pos": {"lat": 0.0, "long": 0.0}, "PosC": 0, "Qcor": 0, "Qmod": 1, "RKPD": 0, "RKRD": 0, "Reac": 0, "TDLD": 0, "Tdep": 0, "Tmes": 0, "Vit": 0.0, "Vmax": 0, "Vmoy": 0}]
}
const pushDataToRedis = () => {
    const redisPublisher = RedisConnect('localhost', 6379);
    redisPublisher.on('connect', () => {
        console.log('Connected to Redis Server!!!!')
    });
    const {Ts, NumP, Vit, PosC, DrDp, Tcle, Dcle, Pcen, Eprm, Dcor} = data.Ctxt;
    
    setInterval(() => {
        const key = Date.now();
        const newData = {
            key : {
                Ts, 
                NumP, 
                Vit, 
                PosC, 
                DrDp, 
                Tcle, 
                Dcle, 
                Pcen, 
                Eprm, 
                Dcor 
            }
        }
        redisPublisher.publish('dataFromWebsocket', JSON.stringify(newData));
    }, 2000);
}

module.exports = pushDataToRedis;
