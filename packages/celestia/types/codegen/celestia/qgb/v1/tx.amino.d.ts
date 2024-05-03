import { MsgRegisterEVMAddress } from "./tx";
export declare const AminoConverter: {
    "/celestia.qgb.v1.MsgRegisterEVMAddress": {
        aminoType: string;
        toAmino: (message: MsgRegisterEVMAddress) => import("./tx").MsgRegisterEVMAddressAmino;
        fromAmino: (object: import("./tx").MsgRegisterEVMAddressAmino) => MsgRegisterEVMAddress;
    };
};
