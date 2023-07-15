import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export interface MsgCreateProviderAminoType extends AminoMsg {
    type: "/akash.provider.v1beta1.MsgCreateProvider";
    value: {
        owner: string;
        host_uri: string;
        attributes: {
            key: string;
            value: string;
        }[];
        info: {
            email: string;
            website: string;
        };
    };
}
export interface MsgUpdateProviderAminoType extends AminoMsg {
    type: "/akash.provider.v1beta1.MsgUpdateProvider";
    value: {
        owner: string;
        host_uri: string;
        attributes: {
            key: string;
            value: string;
        }[];
        info: {
            email: string;
            website: string;
        };
    };
}
export interface MsgDeleteProviderAminoType extends AminoMsg {
    type: "/akash.provider.v1beta1.MsgDeleteProvider";
    value: {
        owner: string;
    };
}
export declare const AminoConverter: {
    "/akash.provider.v1beta1.MsgCreateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: MsgCreateProvider) => MsgCreateProviderAminoType["value"];
        fromAmino: ({ owner, host_uri, attributes, info }: MsgCreateProviderAminoType["value"]) => MsgCreateProvider;
    };
    "/akash.provider.v1beta1.MsgUpdateProvider": {
        aminoType: string;
        toAmino: ({ owner, hostUri, attributes, info }: MsgUpdateProvider) => MsgUpdateProviderAminoType["value"];
        fromAmino: ({ owner, host_uri, attributes, info }: MsgUpdateProviderAminoType["value"]) => MsgUpdateProvider;
    };
    "/akash.provider.v1beta1.MsgDeleteProvider": {
        aminoType: string;
        toAmino: ({ owner }: MsgDeleteProvider) => MsgDeleteProviderAminoType["value"];
        fromAmino: ({ owner }: MsgDeleteProviderAminoType["value"]) => MsgDeleteProvider;
    };
};
