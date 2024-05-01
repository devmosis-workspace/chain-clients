import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const quicksilverAminoConverters: {
    "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/quicksilver.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgMint) => import("./tokenfactory/v1beta1/tx").MsgMintAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgMintAmino) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/quicksilver.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgBurn) => import("./tokenfactory/v1beta1/tx").MsgBurnAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgBurnAmino) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
    };
    "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
        aminoType: string;
        toAmino: (message: import("./participationrewards/v1/messages").MsgSubmitClaim) => import("./participationrewards/v1/messages").MsgSubmitClaimAmino;
        fromAmino: (object: import("./participationrewards/v1/messages").MsgSubmitClaimAmino) => import("./participationrewards/v1/messages").MsgSubmitClaim;
    };
    "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
        aminoType: string;
        toAmino: (message: import("./participationrewards/v1/proposals").MsgGovRemoveProtocolData) => import("./participationrewards/v1/proposals").MsgGovRemoveProtocolDataAmino;
        fromAmino: (object: import("./participationrewards/v1/proposals").MsgGovRemoveProtocolDataAmino) => import("./participationrewards/v1/proposals").MsgGovRemoveProtocolData;
    };
    "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/messages").MsgRequestRedemption) => import("./interchainstaking/v1/messages").MsgRequestRedemptionAmino;
        fromAmino: (object: import("./interchainstaking/v1/messages").MsgRequestRedemptionAmino) => import("./interchainstaking/v1/messages").MsgRequestRedemption;
    };
    "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/messages").MsgSignalIntent) => import("./interchainstaking/v1/messages").MsgSignalIntentAmino;
        fromAmino: (object: import("./interchainstaking/v1/messages").MsgSignalIntentAmino) => import("./interchainstaking/v1/messages").MsgSignalIntent;
    };
    "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/messages").MsgCancelQueuedRedemption) => import("./interchainstaking/v1/messages").MsgCancelQueuedRedemptionAmino;
        fromAmino: (object: import("./interchainstaking/v1/messages").MsgCancelQueuedRedemptionAmino) => import("./interchainstaking/v1/messages").MsgCancelQueuedRedemption;
    };
    "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/proposals").MsgGovCloseChannel) => import("./interchainstaking/v1/proposals").MsgGovCloseChannelAmino;
        fromAmino: (object: import("./interchainstaking/v1/proposals").MsgGovCloseChannelAmino) => import("./interchainstaking/v1/proposals").MsgGovCloseChannel;
    };
    "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/proposals").MsgGovReopenChannel) => import("./interchainstaking/v1/proposals").MsgGovReopenChannelAmino;
        fromAmino: (object: import("./interchainstaking/v1/proposals").MsgGovReopenChannelAmino) => import("./interchainstaking/v1/proposals").MsgGovReopenChannel;
    };
    "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/proposals").MsgGovSetLsmCaps) => import("./interchainstaking/v1/proposals").MsgGovSetLsmCapsAmino;
        fromAmino: (object: import("./interchainstaking/v1/proposals").MsgGovSetLsmCapsAmino) => import("./interchainstaking/v1/proposals").MsgGovSetLsmCaps;
    };
    "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/proposals").MsgGovAddValidatorDenyList) => import("./interchainstaking/v1/proposals").MsgGovAddValidatorDenyListAmino;
        fromAmino: (object: import("./interchainstaking/v1/proposals").MsgGovAddValidatorDenyListAmino) => import("./interchainstaking/v1/proposals").MsgGovAddValidatorDenyList;
    };
    "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList": {
        aminoType: string;
        toAmino: (message: import("./interchainstaking/v1/proposals").MsgGovRemoveValidatorDenyList) => import("./interchainstaking/v1/proposals").MsgGovRemoveValidatorDenyListAmino;
        fromAmino: (object: import("./interchainstaking/v1/proposals").MsgGovRemoveValidatorDenyListAmino) => import("./interchainstaking/v1/proposals").MsgGovRemoveValidatorDenyList;
    };
    "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: import("./interchainquery/v1/messages").MsgSubmitQueryResponse) => import("./interchainquery/v1/messages").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./interchainquery/v1/messages").MsgSubmitQueryResponseAmino) => import("./interchainquery/v1/messages").MsgSubmitQueryResponse;
    };
    "/quicksilver.airdrop.v1.MsgClaim": {
        aminoType: string;
        toAmino: (message: import("./airdrop/v1/messages").MsgClaim) => import("./airdrop/v1/messages").MsgClaimAmino;
        fromAmino: (object: import("./airdrop/v1/messages").MsgClaimAmino) => import("./airdrop/v1/messages").MsgClaim;
    };
    "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
        aminoType: string;
        toAmino: (message: import("./airdrop/v1/messages").MsgIncentivePoolSpend) => import("./airdrop/v1/messages").MsgIncentivePoolSpendAmino;
        fromAmino: (object: import("./airdrop/v1/messages").MsgIncentivePoolSpendAmino) => import("./airdrop/v1/messages").MsgIncentivePoolSpend;
    };
};
export declare const quicksilverProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningQuicksilverClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningQuicksilverClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
