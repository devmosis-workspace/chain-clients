import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const osmosisAminoConverters: {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => {
            sender: string;
            subdenom: string;
        };
        fromAmino: ({ sender, subdenom }: {
            sender: string;
            subdenom: string;
        }) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./tokenfactory/v1beta1/tx").MsgMint) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./tokenfactory/v1beta1/tx").MsgBurn) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => {
            sender: string;
            denom: string;
            newAdmin: string;
        };
        fromAmino: ({ sender, denom, newAdmin }: {
            sender: string;
            denom: string;
            newAdmin: string;
        }) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
