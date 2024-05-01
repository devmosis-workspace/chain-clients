import { MsgCreateThought, MsgForgetThought, MsgChangeThoughtParticle, MsgChangeThoughtName, MsgChangeThoughtInput, MsgChangeThoughtGasPrice, MsgChangeThoughtPeriod, MsgChangeThoughtBlock } from "./tx";
export declare const AminoConverter: {
    "/cyber.dmn.v1beta1.MsgCreateThought": {
        aminoType: string;
        toAmino: (message: MsgCreateThought) => import("./tx").MsgCreateThoughtAmino;
        fromAmino: (object: import("./tx").MsgCreateThoughtAmino) => MsgCreateThought;
    };
    "/cyber.dmn.v1beta1.MsgForgetThought": {
        aminoType: string;
        toAmino: (message: MsgForgetThought) => import("./tx").MsgForgetThoughtAmino;
        fromAmino: (object: import("./tx").MsgForgetThoughtAmino) => MsgForgetThought;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
        aminoType: string;
        toAmino: (message: MsgChangeThoughtParticle) => import("./tx").MsgChangeThoughtParticleAmino;
        fromAmino: (object: import("./tx").MsgChangeThoughtParticleAmino) => MsgChangeThoughtParticle;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
        aminoType: string;
        toAmino: (message: MsgChangeThoughtName) => import("./tx").MsgChangeThoughtNameAmino;
        fromAmino: (object: import("./tx").MsgChangeThoughtNameAmino) => MsgChangeThoughtName;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
        aminoType: string;
        toAmino: (message: MsgChangeThoughtInput) => import("./tx").MsgChangeThoughtInputAmino;
        fromAmino: (object: import("./tx").MsgChangeThoughtInputAmino) => MsgChangeThoughtInput;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
        aminoType: string;
        toAmino: (message: MsgChangeThoughtGasPrice) => import("./tx").MsgChangeThoughtGasPriceAmino;
        fromAmino: (object: import("./tx").MsgChangeThoughtGasPriceAmino) => MsgChangeThoughtGasPrice;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
        aminoType: string;
        toAmino: (message: MsgChangeThoughtPeriod) => import("./tx").MsgChangeThoughtPeriodAmino;
        fromAmino: (object: import("./tx").MsgChangeThoughtPeriodAmino) => MsgChangeThoughtPeriod;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
        aminoType: string;
        toAmino: (message: MsgChangeThoughtBlock) => import("./tx").MsgChangeThoughtBlockAmino;
        fromAmino: (object: import("./tx").MsgChangeThoughtBlockAmino) => MsgChangeThoughtBlock;
    };
};
