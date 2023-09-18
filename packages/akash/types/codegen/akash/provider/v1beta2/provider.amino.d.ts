import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const AminoConverter: {
    "/akash.provider.v1beta2.MsgCreateProvider": {
        aminoType: string;
        toAmino: (message: MsgCreateProvider) => import("./provider").MsgCreateProviderAmino;
        fromAmino: (object: import("./provider").MsgCreateProviderAmino) => MsgCreateProvider;
    };
    "/akash.provider.v1beta2.MsgUpdateProvider": {
        aminoType: string;
        toAmino: (message: MsgUpdateProvider) => import("./provider").MsgUpdateProviderAmino;
        fromAmino: (object: import("./provider").MsgUpdateProviderAmino) => MsgUpdateProvider;
    };
    "/akash.provider.v1beta2.MsgDeleteProvider": {
        aminoType: string;
        toAmino: (message: MsgDeleteProvider) => import("./provider").MsgDeleteProviderAmino;
        fromAmino: (object: import("./provider").MsgDeleteProviderAmino) => MsgDeleteProvider;
    };
};
