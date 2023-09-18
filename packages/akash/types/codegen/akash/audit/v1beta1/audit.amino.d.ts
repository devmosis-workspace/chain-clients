import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export declare const AminoConverter: {
    "/akash.audit.v1beta1.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: (message: MsgSignProviderAttributes) => import("./audit").MsgSignProviderAttributesAmino;
        fromAmino: (object: import("./audit").MsgSignProviderAttributesAmino) => MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: (message: MsgDeleteProviderAttributes) => import("./audit").MsgDeleteProviderAttributesAmino;
        fromAmino: (object: import("./audit").MsgDeleteProviderAttributesAmino) => MsgDeleteProviderAttributes;
    };
};
