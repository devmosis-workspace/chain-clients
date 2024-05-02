import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const pobAminoConverters: {
    "/pob.builder.v1.MsgAuctionBid": {
        aminoType: string;
        toAmino: (message: import("./builder/v1/tx").MsgAuctionBid) => import("./builder/v1/tx").MsgAuctionBidAmino;
        fromAmino: (object: import("./builder/v1/tx").MsgAuctionBidAmino) => import("./builder/v1/tx").MsgAuctionBid;
    };
    "/pob.builder.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./builder/v1/tx").MsgUpdateParams) => import("./builder/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./builder/v1/tx").MsgUpdateParamsAmino) => import("./builder/v1/tx").MsgUpdateParams;
    };
};
export declare const pobProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPobClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPobClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
