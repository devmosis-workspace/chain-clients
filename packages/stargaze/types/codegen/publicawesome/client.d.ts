import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const publicawesomeAminoConverters: {
    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
        aminoType: string;
        toAmino: ({ sender, codeAuthorization }: import("../stargaze/globalfee/v1/tx").MsgSetCodeAuthorization) => {
            sender: string;
            code_authorization: {
                code_id: string;
                methods: string[];
            };
        };
        fromAmino: ({ sender, code_authorization }: {
            sender: string;
            code_authorization: {
                code_id: string;
                methods: string[];
            };
        }) => import("../stargaze/globalfee/v1/tx").MsgSetCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
        aminoType: string;
        toAmino: ({ sender, codeId }: import("../stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorization) => {
            sender: string;
            code_id: string;
        };
        fromAmino: ({ sender, code_id }: {
            sender: string;
            code_id: string;
        }) => import("../stargaze/globalfee/v1/tx").MsgRemoveCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
        aminoType: string;
        toAmino: ({ sender, contractAuthorization }: import("../stargaze/globalfee/v1/tx").MsgSetContractAuthorization) => {
            sender: string;
            contract_authorization: {
                contract_address: string;
                methods: string[];
            };
        };
        fromAmino: ({ sender, contract_authorization }: {
            sender: string;
            contract_authorization: {
                contract_address: string;
                methods: string[];
            };
        }) => import("../stargaze/globalfee/v1/tx").MsgSetContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
        aminoType: string;
        toAmino: ({ sender, contractAddress }: import("../stargaze/globalfee/v1/tx").MsgRemoveContractAuthorization) => {
            sender: string;
            contract_address: string;
        };
        fromAmino: ({ sender, contract_address }: {
            sender: string;
            contract_address: string;
        }) => import("../stargaze/globalfee/v1/tx").MsgRemoveContractAuthorization;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: ({ sender }: import("../stargaze/claim/v1beta1/tx").MsgInitialClaim) => {
            sender: string;
        };
        fromAmino: ({ sender }: {
            sender: string;
        }) => import("../stargaze/claim/v1beta1/tx").MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: import("../stargaze/claim/v1beta1/tx").MsgClaimFor) => {
            sender: string;
            address: string;
            action: number;
        };
        fromAmino: ({ sender, address, action }: {
            sender: string;
            address: string;
            action: number;
        }) => import("../stargaze/claim/v1beta1/tx").MsgClaimFor;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            start_time: string;
            end_time: string;
            delayed: boolean;
        };
        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            start_time: string;
            end_time: string;
            delayed: boolean;
        }) => import("../stargaze/alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("../stargaze/alloc/v1beta1/tx").MsgFundFairburnPool) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }) => import("../stargaze/alloc/v1beta1/tx").MsgFundFairburnPool;
    };
};
export declare const publicawesomeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPublicawesomeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPublicawesomeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
