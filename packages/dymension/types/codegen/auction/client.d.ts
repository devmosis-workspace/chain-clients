import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const auctionAminoConverters: {
    "/auction.v1.MsgSubmitBidRequest": {
        aminoType: string;
        toAmino: (message: import("./v1/tx").MsgSubmitBidRequest) => import("./v1/tx").MsgSubmitBidRequestAmino;
        fromAmino: (object: import("./v1/tx").MsgSubmitBidRequestAmino) => import("./v1/tx").MsgSubmitBidRequest;
    };
};
export declare const auctionProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAuctionClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAuctionClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
