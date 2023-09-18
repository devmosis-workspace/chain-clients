import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export declare const AminoConverter: {
    "/akash.provider.v1beta1.MsgCreateProvider": {
        aminoType: string;
        toAmino: (message: MsgCreateProvider) => import("./provider").MsgCreateProviderAmino;
        fromAmino: (object: import("./provider").MsgCreateProviderAmino) => MsgCreateProvider;
    };
    "/akash.provider.v1beta1.MsgUpdateProvider": {
        aminoType: string;
        toAmino: (message: MsgUpdateProvider) => import("./provider").MsgUpdateProviderAmino;
        fromAmino: (object: import("./provider").MsgUpdateProviderAmino) => MsgUpdateProvider;
    };
    "/akash.provider.v1beta1.MsgDeleteProvider": {
        aminoType: string;
        toAmino: (message: MsgDeleteProvider) => import("./provider").MsgDeleteProviderAmino;
        fromAmino: (object: import("./provider").MsgDeleteProviderAmino) => MsgDeleteProvider;
    };
};
