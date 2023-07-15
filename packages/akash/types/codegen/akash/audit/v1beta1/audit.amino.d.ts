import { AminoMsg } from "@cosmjs/amino";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export interface MsgSignProviderAttributesAminoType extends AminoMsg {
    type: "/akash.audit.v1beta1.MsgSignProviderAttributes";
    value: {
        owner: string;
        auditor: string;
        attributes: {
            key: string;
            value: string;
        }[];
    };
}
export interface MsgDeleteProviderAttributesAminoType extends AminoMsg {
    type: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
    value: {
        owner: string;
        auditor: string;
        keys: string[];
    };
}
export declare const AminoConverter: {
    "/akash.audit.v1beta1.MsgSignProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, attributes }: MsgSignProviderAttributes) => MsgSignProviderAttributesAminoType["value"];
        fromAmino: ({ owner, auditor, attributes }: MsgSignProviderAttributesAminoType["value"]) => MsgSignProviderAttributes;
    };
    "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
        aminoType: string;
        toAmino: ({ owner, auditor, keys }: MsgDeleteProviderAttributes) => MsgDeleteProviderAttributesAminoType["value"];
        fromAmino: ({ owner, auditor, keys }: MsgDeleteProviderAttributesAminoType["value"]) => MsgDeleteProviderAttributes;
    };
};
