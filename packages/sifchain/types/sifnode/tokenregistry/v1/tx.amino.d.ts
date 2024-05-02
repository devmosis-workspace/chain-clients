import { MsgRegister, MsgDeregister, MsgSetRegistry } from "./tx";
export declare const AminoConverter: {
    "/sifnode.tokenregistry.v1.MsgRegister": {
        aminoType: string;
        toAmino: (message: MsgRegister) => import("./tx").MsgRegisterAmino;
        fromAmino: (object: import("./tx").MsgRegisterAmino) => MsgRegister;
    };
    "/sifnode.tokenregistry.v1.MsgDeregister": {
        aminoType: string;
        toAmino: (message: MsgDeregister) => import("./tx").MsgDeregisterAmino;
        fromAmino: (object: import("./tx").MsgDeregisterAmino) => MsgDeregister;
    };
    "/sifnode.tokenregistry.v1.MsgSetRegistry": {
        aminoType: string;
        toAmino: (message: MsgSetRegistry) => import("./tx").MsgSetRegistryAmino;
        fromAmino: (object: import("./tx").MsgSetRegistryAmino) => MsgSetRegistry;
    };
};
