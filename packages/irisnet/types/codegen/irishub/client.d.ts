import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const irishubAminoConverters: {
    "/irishub.guardian.MsgAddSuper": {
        aminoType: string;
        toAmino: ({ description, address, addedBy }: import("../guardian/tx").MsgAddSuper) => {
            description: string;
            address: string;
            added_by: string;
        };
        fromAmino: ({ description, address, added_by }: {
            description: string;
            address: string;
            added_by: string;
        }) => import("../guardian/tx").MsgAddSuper;
    };
    "/irishub.guardian.MsgDeleteSuper": {
        aminoType: string;
        toAmino: ({ address, deletedBy }: import("../guardian/tx").MsgDeleteSuper) => {
            address: string;
            deleted_by: string;
        };
        fromAmino: ({ address, deleted_by }: {
            address: string;
            deleted_by: string;
        }) => import("../guardian/tx").MsgDeleteSuper;
    };
};
export declare const irishubProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIrishubClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIrishubClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
