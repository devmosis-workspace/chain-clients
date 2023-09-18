import * as _4 from "../stargaze/alloc/v1beta1/genesis";
import * as _5 from "../stargaze/alloc/v1beta1/params";
import * as _6 from "../stargaze/alloc/v1beta1/query";
import * as _7 from "../stargaze/alloc/v1beta1/tx";
import * as _8 from "../stargaze/claim/v1beta1/claim_record";
import * as _9 from "../stargaze/claim/v1beta1/genesis";
import * as _10 from "../stargaze/claim/v1beta1/params";
import * as _11 from "../stargaze/claim/v1beta1/query";
import * as _12 from "../stargaze/claim/v1beta1/tx";
import * as _13 from "../stargaze/cron/v1/genesis";
import * as _14 from "../stargaze/cron/v1/proposal";
import * as _15 from "../stargaze/cron/v1/query";
import * as _16 from "../stargaze/globalfee/v1/genesis";
import * as _17 from "../stargaze/globalfee/v1/globalfee";
import * as _18 from "../stargaze/globalfee/v1/proposal";
import * as _19 from "../stargaze/globalfee/v1/query";
import * as _20 from "../stargaze/globalfee/v1/tx";
import * as _137 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _138 from "../stargaze/claim/v1beta1/query.lcd";
import * as _139 from "../stargaze/cron/v1/query.lcd";
import * as _140 from "../stargaze/globalfee/v1/query.lcd";
import * as _141 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _142 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _143 from "../stargaze/cron/v1/query.rpc.Query";
import * as _144 from "../stargaze/globalfee/v1/query.rpc.Query";
import * as _145 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _146 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _147 from "../stargaze/globalfee/v1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _145.MsgClientImpl;
                QueryClientImpl: typeof _141.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _137.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _7.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        fundFairburnPool(value: _7.MsgFundFairburnPool): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _7.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _7.MsgCreateVestingAccount;
                        };
                        fundFairburnPool(value: _7.MsgFundFairburnPool): {
                            typeUrl: string;
                            value: _7.MsgFundFairburnPool;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _7.MsgCreateVestingAccount;
                        };
                        fundFairburnPool(value: any): {
                            typeUrl: string;
                            value: _7.MsgFundFairburnPool;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _7.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _7.MsgCreateVestingAccount;
                        };
                        fundFairburnPool(value: _7.MsgFundFairburnPool): {
                            typeUrl: string;
                            value: _7.MsgFundFairburnPool;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: (message: _7.MsgCreateVestingAccount) => _7.MsgCreateVestingAccountAmino;
                        fromAmino: (object: _7.MsgCreateVestingAccountAmino) => _7.MsgCreateVestingAccount;
                    };
                    "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool": {
                        aminoType: string;
                        toAmino: (message: _7.MsgFundFairburnPool) => _7.MsgFundFairburnPoolAmino;
                        fromAmino: (object: _7.MsgFundFairburnPoolAmino) => _7.MsgFundFairburnPool;
                    };
                };
                MsgCreateVestingAccount: {
                    typeUrl: string;
                    encode(message: _7.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.MsgCreateVestingAccount;
                    fromPartial(object: Partial<_7.MsgCreateVestingAccount>): _7.MsgCreateVestingAccount;
                    fromAmino(object: _7.MsgCreateVestingAccountAmino): _7.MsgCreateVestingAccount;
                    toAmino(message: _7.MsgCreateVestingAccount): _7.MsgCreateVestingAccountAmino;
                    fromAminoMsg(object: _7.MsgCreateVestingAccountAminoMsg): _7.MsgCreateVestingAccount;
                    fromProtoMsg(message: _7.MsgCreateVestingAccountProtoMsg): _7.MsgCreateVestingAccount;
                    toProto(message: _7.MsgCreateVestingAccount): Uint8Array;
                    toProtoMsg(message: _7.MsgCreateVestingAccount): _7.MsgCreateVestingAccountProtoMsg;
                };
                MsgCreateVestingAccountResponse: {
                    typeUrl: string;
                    encode(_: _7.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _7.MsgCreateVestingAccountResponse;
                    fromPartial(_: Partial<_7.MsgCreateVestingAccountResponse>): _7.MsgCreateVestingAccountResponse;
                    fromAmino(_: _7.MsgCreateVestingAccountResponseAmino): _7.MsgCreateVestingAccountResponse;
                    toAmino(_: _7.MsgCreateVestingAccountResponse): _7.MsgCreateVestingAccountResponseAmino;
                    fromAminoMsg(object: _7.MsgCreateVestingAccountResponseAminoMsg): _7.MsgCreateVestingAccountResponse;
                    fromProtoMsg(message: _7.MsgCreateVestingAccountResponseProtoMsg): _7.MsgCreateVestingAccountResponse;
                    toProto(message: _7.MsgCreateVestingAccountResponse): Uint8Array;
                    toProtoMsg(message: _7.MsgCreateVestingAccountResponse): _7.MsgCreateVestingAccountResponseProtoMsg;
                };
                MsgFundFairburnPool: {
                    typeUrl: string;
                    encode(message: _7.MsgFundFairburnPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.MsgFundFairburnPool;
                    fromPartial(object: Partial<_7.MsgFundFairburnPool>): _7.MsgFundFairburnPool;
                    fromAmino(object: _7.MsgFundFairburnPoolAmino): _7.MsgFundFairburnPool;
                    toAmino(message: _7.MsgFundFairburnPool): _7.MsgFundFairburnPoolAmino;
                    fromAminoMsg(object: _7.MsgFundFairburnPoolAminoMsg): _7.MsgFundFairburnPool;
                    fromProtoMsg(message: _7.MsgFundFairburnPoolProtoMsg): _7.MsgFundFairburnPool;
                    toProto(message: _7.MsgFundFairburnPool): Uint8Array;
                    toProtoMsg(message: _7.MsgFundFairburnPool): _7.MsgFundFairburnPoolProtoMsg;
                };
                MsgFundFairburnPoolResponse: {
                    typeUrl: string;
                    encode(_: _7.MsgFundFairburnPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _7.MsgFundFairburnPoolResponse;
                    fromPartial(_: Partial<_7.MsgFundFairburnPoolResponse>): _7.MsgFundFairburnPoolResponse;
                    fromAmino(_: _7.MsgFundFairburnPoolResponseAmino): _7.MsgFundFairburnPoolResponse;
                    toAmino(_: _7.MsgFundFairburnPoolResponse): _7.MsgFundFairburnPoolResponseAmino;
                    fromAminoMsg(object: _7.MsgFundFairburnPoolResponseAminoMsg): _7.MsgFundFairburnPoolResponse;
                    fromProtoMsg(message: _7.MsgFundFairburnPoolResponseProtoMsg): _7.MsgFundFairburnPoolResponse;
                    toProto(message: _7.MsgFundFairburnPoolResponse): Uint8Array;
                    toProtoMsg(message: _7.MsgFundFairburnPoolResponse): _7.MsgFundFairburnPoolResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _6.QueryParamsRequest;
                    fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
                    fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
                    toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
                    fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
                    fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
                    toProto(message: _6.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryParamsResponse;
                    fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
                    fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
                    toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
                    fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
                    fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
                    toProto(message: _6.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
                };
                WeightedAddress: {
                    typeUrl: string;
                    encode(message: _5.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.WeightedAddress;
                    fromPartial(object: Partial<_5.WeightedAddress>): _5.WeightedAddress;
                    fromAmino(object: _5.WeightedAddressAmino): _5.WeightedAddress;
                    toAmino(message: _5.WeightedAddress): _5.WeightedAddressAmino;
                    fromAminoMsg(object: _5.WeightedAddressAminoMsg): _5.WeightedAddress;
                    fromProtoMsg(message: _5.WeightedAddressProtoMsg): _5.WeightedAddress;
                    toProto(message: _5.WeightedAddress): Uint8Array;
                    toProtoMsg(message: _5.WeightedAddress): _5.WeightedAddressProtoMsg;
                };
                DistributionProportions: {
                    typeUrl: string;
                    encode(message: _5.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.DistributionProportions;
                    fromPartial(object: Partial<_5.DistributionProportions>): _5.DistributionProportions;
                    fromAmino(object: _5.DistributionProportionsAmino): _5.DistributionProportions;
                    toAmino(message: _5.DistributionProportions): _5.DistributionProportionsAmino;
                    fromAminoMsg(object: _5.DistributionProportionsAminoMsg): _5.DistributionProportions;
                    fromProtoMsg(message: _5.DistributionProportionsProtoMsg): _5.DistributionProportions;
                    toProto(message: _5.DistributionProportions): Uint8Array;
                    toProtoMsg(message: _5.DistributionProportions): _5.DistributionProportionsProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _5.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.Params;
                    fromPartial(object: Partial<_5.Params>): _5.Params;
                    fromAmino(object: _5.ParamsAmino): _5.Params;
                    toAmino(message: _5.Params): _5.ParamsAmino;
                    fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
                    fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
                    toProto(message: _5.Params): Uint8Array;
                    toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _4.GenesisState;
                    fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                    fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                    toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                    fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                    fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                    toProto(message: _4.GenesisState): Uint8Array;
                    toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _146.MsgClientImpl;
                QueryClientImpl: typeof _142.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    moduleAccountBalance(request?: _11.QueryModuleAccountBalanceRequest): Promise<_11.QueryModuleAccountBalanceResponse>;
                    params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                    claimRecord(request: _11.QueryClaimRecordRequest): Promise<_11.QueryClaimRecordResponse>;
                    claimableForAction(request: _11.QueryClaimableForActionRequest): Promise<_11.QueryClaimableForActionResponse>;
                    totalClaimable(request: _11.QueryTotalClaimableRequest): Promise<_11.QueryTotalClaimableResponse>;
                };
                LCDQueryClient: typeof _138.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _12.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _12.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _12.MsgInitialClaim): {
                            typeUrl: string;
                            value: _12.MsgInitialClaim;
                        };
                        claimFor(value: _12.MsgClaimFor): {
                            typeUrl: string;
                            value: _12.MsgClaimFor;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _12.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _12.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _12.MsgInitialClaim): {
                            typeUrl: string;
                            value: _12.MsgInitialClaim;
                        };
                        claimFor(value: _12.MsgClaimFor): {
                            typeUrl: string;
                            value: _12.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: (message: _12.MsgInitialClaim) => _12.MsgInitialClaimAmino;
                        fromAmino: (object: _12.MsgInitialClaimAmino) => _12.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: (message: _12.MsgClaimFor) => _12.MsgClaimForAmino;
                        fromAmino: (object: _12.MsgClaimForAmino) => _12.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    typeUrl: string;
                    encode(message: _12.MsgInitialClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgInitialClaim;
                    fromPartial(object: Partial<_12.MsgInitialClaim>): _12.MsgInitialClaim;
                    fromAmino(object: _12.MsgInitialClaimAmino): _12.MsgInitialClaim;
                    toAmino(message: _12.MsgInitialClaim): _12.MsgInitialClaimAmino;
                    fromAminoMsg(object: _12.MsgInitialClaimAminoMsg): _12.MsgInitialClaim;
                    fromProtoMsg(message: _12.MsgInitialClaimProtoMsg): _12.MsgInitialClaim;
                    toProto(message: _12.MsgInitialClaim): Uint8Array;
                    toProtoMsg(message: _12.MsgInitialClaim): _12.MsgInitialClaimProtoMsg;
                };
                MsgInitialClaimResponse: {
                    typeUrl: string;
                    encode(message: _12.MsgInitialClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgInitialClaimResponse;
                    fromPartial(object: Partial<_12.MsgInitialClaimResponse>): _12.MsgInitialClaimResponse;
                    fromAmino(object: _12.MsgInitialClaimResponseAmino): _12.MsgInitialClaimResponse;
                    toAmino(message: _12.MsgInitialClaimResponse): _12.MsgInitialClaimResponseAmino;
                    fromAminoMsg(object: _12.MsgInitialClaimResponseAminoMsg): _12.MsgInitialClaimResponse;
                    fromProtoMsg(message: _12.MsgInitialClaimResponseProtoMsg): _12.MsgInitialClaimResponse;
                    toProto(message: _12.MsgInitialClaimResponse): Uint8Array;
                    toProtoMsg(message: _12.MsgInitialClaimResponse): _12.MsgInitialClaimResponseProtoMsg;
                };
                MsgClaimFor: {
                    typeUrl: string;
                    encode(message: _12.MsgClaimFor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgClaimFor;
                    fromPartial(object: Partial<_12.MsgClaimFor>): _12.MsgClaimFor;
                    fromAmino(object: _12.MsgClaimForAmino): _12.MsgClaimFor;
                    toAmino(message: _12.MsgClaimFor): _12.MsgClaimForAmino;
                    fromAminoMsg(object: _12.MsgClaimForAminoMsg): _12.MsgClaimFor;
                    fromProtoMsg(message: _12.MsgClaimForProtoMsg): _12.MsgClaimFor;
                    toProto(message: _12.MsgClaimFor): Uint8Array;
                    toProtoMsg(message: _12.MsgClaimFor): _12.MsgClaimForProtoMsg;
                };
                MsgClaimForResponse: {
                    typeUrl: string;
                    encode(message: _12.MsgClaimForResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgClaimForResponse;
                    fromPartial(object: Partial<_12.MsgClaimForResponse>): _12.MsgClaimForResponse;
                    fromAmino(object: _12.MsgClaimForResponseAmino): _12.MsgClaimForResponse;
                    toAmino(message: _12.MsgClaimForResponse): _12.MsgClaimForResponseAmino;
                    fromAminoMsg(object: _12.MsgClaimForResponseAminoMsg): _12.MsgClaimForResponse;
                    fromProtoMsg(message: _12.MsgClaimForResponseProtoMsg): _12.MsgClaimForResponse;
                    toProto(message: _12.MsgClaimForResponse): Uint8Array;
                    toProtoMsg(message: _12.MsgClaimForResponse): _12.MsgClaimForResponseProtoMsg;
                };
                QueryModuleAccountBalanceRequest: {
                    typeUrl: string;
                    encode(_: _11.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _11.QueryModuleAccountBalanceRequest;
                    fromPartial(_: Partial<_11.QueryModuleAccountBalanceRequest>): _11.QueryModuleAccountBalanceRequest;
                    fromAmino(_: _11.QueryModuleAccountBalanceRequestAmino): _11.QueryModuleAccountBalanceRequest;
                    toAmino(_: _11.QueryModuleAccountBalanceRequest): _11.QueryModuleAccountBalanceRequestAmino;
                    fromAminoMsg(object: _11.QueryModuleAccountBalanceRequestAminoMsg): _11.QueryModuleAccountBalanceRequest;
                    fromProtoMsg(message: _11.QueryModuleAccountBalanceRequestProtoMsg): _11.QueryModuleAccountBalanceRequest;
                    toProto(message: _11.QueryModuleAccountBalanceRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryModuleAccountBalanceRequest): _11.QueryModuleAccountBalanceRequestProtoMsg;
                };
                QueryModuleAccountBalanceResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryModuleAccountBalanceResponse;
                    fromPartial(object: Partial<_11.QueryModuleAccountBalanceResponse>): _11.QueryModuleAccountBalanceResponse;
                    fromAmino(object: _11.QueryModuleAccountBalanceResponseAmino): _11.QueryModuleAccountBalanceResponse;
                    toAmino(message: _11.QueryModuleAccountBalanceResponse): _11.QueryModuleAccountBalanceResponseAmino;
                    fromAminoMsg(object: _11.QueryModuleAccountBalanceResponseAminoMsg): _11.QueryModuleAccountBalanceResponse;
                    fromProtoMsg(message: _11.QueryModuleAccountBalanceResponseProtoMsg): _11.QueryModuleAccountBalanceResponse;
                    toProto(message: _11.QueryModuleAccountBalanceResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryModuleAccountBalanceResponse): _11.QueryModuleAccountBalanceResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _11.QueryParamsRequest;
                    fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                    fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
                    toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
                    fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
                    fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
                    toProto(message: _11.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryParamsResponse;
                    fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                    fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
                    toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
                    fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
                    fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
                    toProto(message: _11.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
                };
                QueryClaimRecordRequest: {
                    typeUrl: string;
                    encode(message: _11.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryClaimRecordRequest;
                    fromPartial(object: Partial<_11.QueryClaimRecordRequest>): _11.QueryClaimRecordRequest;
                    fromAmino(object: _11.QueryClaimRecordRequestAmino): _11.QueryClaimRecordRequest;
                    toAmino(message: _11.QueryClaimRecordRequest): _11.QueryClaimRecordRequestAmino;
                    fromAminoMsg(object: _11.QueryClaimRecordRequestAminoMsg): _11.QueryClaimRecordRequest;
                    fromProtoMsg(message: _11.QueryClaimRecordRequestProtoMsg): _11.QueryClaimRecordRequest;
                    toProto(message: _11.QueryClaimRecordRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryClaimRecordRequest): _11.QueryClaimRecordRequestProtoMsg;
                };
                QueryClaimRecordResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryClaimRecordResponse;
                    fromPartial(object: Partial<_11.QueryClaimRecordResponse>): _11.QueryClaimRecordResponse;
                    fromAmino(object: _11.QueryClaimRecordResponseAmino): _11.QueryClaimRecordResponse;
                    toAmino(message: _11.QueryClaimRecordResponse): _11.QueryClaimRecordResponseAmino;
                    fromAminoMsg(object: _11.QueryClaimRecordResponseAminoMsg): _11.QueryClaimRecordResponse;
                    fromProtoMsg(message: _11.QueryClaimRecordResponseProtoMsg): _11.QueryClaimRecordResponse;
                    toProto(message: _11.QueryClaimRecordResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryClaimRecordResponse): _11.QueryClaimRecordResponseProtoMsg;
                };
                QueryClaimableForActionRequest: {
                    typeUrl: string;
                    encode(message: _11.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryClaimableForActionRequest;
                    fromPartial(object: Partial<_11.QueryClaimableForActionRequest>): _11.QueryClaimableForActionRequest;
                    fromAmino(object: _11.QueryClaimableForActionRequestAmino): _11.QueryClaimableForActionRequest;
                    toAmino(message: _11.QueryClaimableForActionRequest): _11.QueryClaimableForActionRequestAmino;
                    fromAminoMsg(object: _11.QueryClaimableForActionRequestAminoMsg): _11.QueryClaimableForActionRequest;
                    fromProtoMsg(message: _11.QueryClaimableForActionRequestProtoMsg): _11.QueryClaimableForActionRequest;
                    toProto(message: _11.QueryClaimableForActionRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryClaimableForActionRequest): _11.QueryClaimableForActionRequestProtoMsg;
                };
                QueryClaimableForActionResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryClaimableForActionResponse;
                    fromPartial(object: Partial<_11.QueryClaimableForActionResponse>): _11.QueryClaimableForActionResponse;
                    fromAmino(object: _11.QueryClaimableForActionResponseAmino): _11.QueryClaimableForActionResponse;
                    toAmino(message: _11.QueryClaimableForActionResponse): _11.QueryClaimableForActionResponseAmino;
                    fromAminoMsg(object: _11.QueryClaimableForActionResponseAminoMsg): _11.QueryClaimableForActionResponse;
                    fromProtoMsg(message: _11.QueryClaimableForActionResponseProtoMsg): _11.QueryClaimableForActionResponse;
                    toProto(message: _11.QueryClaimableForActionResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryClaimableForActionResponse): _11.QueryClaimableForActionResponseProtoMsg;
                };
                QueryTotalClaimableRequest: {
                    typeUrl: string;
                    encode(message: _11.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryTotalClaimableRequest;
                    fromPartial(object: Partial<_11.QueryTotalClaimableRequest>): _11.QueryTotalClaimableRequest;
                    fromAmino(object: _11.QueryTotalClaimableRequestAmino): _11.QueryTotalClaimableRequest;
                    toAmino(message: _11.QueryTotalClaimableRequest): _11.QueryTotalClaimableRequestAmino;
                    fromAminoMsg(object: _11.QueryTotalClaimableRequestAminoMsg): _11.QueryTotalClaimableRequest;
                    fromProtoMsg(message: _11.QueryTotalClaimableRequestProtoMsg): _11.QueryTotalClaimableRequest;
                    toProto(message: _11.QueryTotalClaimableRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryTotalClaimableRequest): _11.QueryTotalClaimableRequestProtoMsg;
                };
                QueryTotalClaimableResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryTotalClaimableResponse;
                    fromPartial(object: Partial<_11.QueryTotalClaimableResponse>): _11.QueryTotalClaimableResponse;
                    fromAmino(object: _11.QueryTotalClaimableResponseAmino): _11.QueryTotalClaimableResponse;
                    toAmino(message: _11.QueryTotalClaimableResponse): _11.QueryTotalClaimableResponseAmino;
                    fromAminoMsg(object: _11.QueryTotalClaimableResponseAminoMsg): _11.QueryTotalClaimableResponse;
                    fromProtoMsg(message: _11.QueryTotalClaimableResponseProtoMsg): _11.QueryTotalClaimableResponse;
                    toProto(message: _11.QueryTotalClaimableResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryTotalClaimableResponse): _11.QueryTotalClaimableResponseProtoMsg;
                };
                ClaimAuthorization: {
                    typeUrl: string;
                    encode(message: _10.ClaimAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.ClaimAuthorization;
                    fromPartial(object: Partial<_10.ClaimAuthorization>): _10.ClaimAuthorization;
                    fromAmino(object: _10.ClaimAuthorizationAmino): _10.ClaimAuthorization;
                    toAmino(message: _10.ClaimAuthorization): _10.ClaimAuthorizationAmino;
                    fromAminoMsg(object: _10.ClaimAuthorizationAminoMsg): _10.ClaimAuthorization;
                    fromProtoMsg(message: _10.ClaimAuthorizationProtoMsg): _10.ClaimAuthorization;
                    toProto(message: _10.ClaimAuthorization): Uint8Array;
                    toProtoMsg(message: _10.ClaimAuthorization): _10.ClaimAuthorizationProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.Params;
                    fromPartial(object: Partial<_10.Params>): _10.Params;
                    fromAmino(object: _10.ParamsAmino): _10.Params;
                    toAmino(message: _10.Params): _10.ParamsAmino;
                    fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                    fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                    toProto(message: _10.Params): Uint8Array;
                    toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.GenesisState;
                    fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
                    fromAmino(object: _9.GenesisStateAmino): _9.GenesisState;
                    toAmino(message: _9.GenesisState): _9.GenesisStateAmino;
                    fromAminoMsg(object: _9.GenesisStateAminoMsg): _9.GenesisState;
                    fromProtoMsg(message: _9.GenesisStateProtoMsg): _9.GenesisState;
                    toProto(message: _9.GenesisState): Uint8Array;
                    toProtoMsg(message: _9.GenesisState): _9.GenesisStateProtoMsg;
                };
                actionFromJSON(object: any): _8.Action;
                actionToJSON(object: _8.Action): string;
                Action: typeof _8.Action;
                ActionSDKType: typeof _8.Action;
                ActionAmino: typeof _8.Action;
                ClaimRecord: {
                    typeUrl: string;
                    encode(message: _8.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.ClaimRecord;
                    fromPartial(object: Partial<_8.ClaimRecord>): _8.ClaimRecord;
                    fromAmino(object: _8.ClaimRecordAmino): _8.ClaimRecord;
                    toAmino(message: _8.ClaimRecord): _8.ClaimRecordAmino;
                    fromAminoMsg(object: _8.ClaimRecordAminoMsg): _8.ClaimRecord;
                    fromProtoMsg(message: _8.ClaimRecordProtoMsg): _8.ClaimRecord;
                    toProto(message: _8.ClaimRecord): Uint8Array;
                    toProtoMsg(message: _8.ClaimRecord): _8.ClaimRecordProtoMsg;
                };
            };
        }
        namespace cron {
            const v1: {
                QueryClientImpl: typeof _143.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    listPrivileged(request?: _15.QueryListPrivilegedRequest): Promise<_15.QueryListPrivilegedResponse>;
                };
                LCDQueryClient: typeof _139.LCDQueryClient;
                QueryListPrivilegedRequest: {
                    typeUrl: string;
                    encode(_: _15.QueryListPrivilegedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _15.QueryListPrivilegedRequest;
                    fromPartial(_: Partial<_15.QueryListPrivilegedRequest>): _15.QueryListPrivilegedRequest;
                    fromAmino(_: _15.QueryListPrivilegedRequestAmino): _15.QueryListPrivilegedRequest;
                    toAmino(_: _15.QueryListPrivilegedRequest): _15.QueryListPrivilegedRequestAmino;
                    fromAminoMsg(object: _15.QueryListPrivilegedRequestAminoMsg): _15.QueryListPrivilegedRequest;
                    fromProtoMsg(message: _15.QueryListPrivilegedRequestProtoMsg): _15.QueryListPrivilegedRequest;
                    toProto(message: _15.QueryListPrivilegedRequest): Uint8Array;
                    toProtoMsg(message: _15.QueryListPrivilegedRequest): _15.QueryListPrivilegedRequestProtoMsg;
                };
                QueryListPrivilegedResponse: {
                    typeUrl: string;
                    encode(message: _15.QueryListPrivilegedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.QueryListPrivilegedResponse;
                    fromPartial(object: Partial<_15.QueryListPrivilegedResponse>): _15.QueryListPrivilegedResponse;
                    fromAmino(object: _15.QueryListPrivilegedResponseAmino): _15.QueryListPrivilegedResponse;
                    toAmino(message: _15.QueryListPrivilegedResponse): _15.QueryListPrivilegedResponseAmino;
                    fromAminoMsg(object: _15.QueryListPrivilegedResponseAminoMsg): _15.QueryListPrivilegedResponse;
                    fromProtoMsg(message: _15.QueryListPrivilegedResponseProtoMsg): _15.QueryListPrivilegedResponse;
                    toProto(message: _15.QueryListPrivilegedResponse): Uint8Array;
                    toProtoMsg(message: _15.QueryListPrivilegedResponse): _15.QueryListPrivilegedResponseProtoMsg;
                };
                PromoteToPrivilegedContractProposal: {
                    typeUrl: string;
                    encode(message: _14.PromoteToPrivilegedContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.PromoteToPrivilegedContractProposal;
                    fromPartial(object: Partial<_14.PromoteToPrivilegedContractProposal>): _14.PromoteToPrivilegedContractProposal;
                    fromAmino(object: _14.PromoteToPrivilegedContractProposalAmino): _14.PromoteToPrivilegedContractProposal;
                    toAmino(message: _14.PromoteToPrivilegedContractProposal): _14.PromoteToPrivilegedContractProposalAmino;
                    fromAminoMsg(object: _14.PromoteToPrivilegedContractProposalAminoMsg): _14.PromoteToPrivilegedContractProposal;
                    fromProtoMsg(message: _14.PromoteToPrivilegedContractProposalProtoMsg): _14.PromoteToPrivilegedContractProposal;
                    toProto(message: _14.PromoteToPrivilegedContractProposal): Uint8Array;
                    toProtoMsg(message: _14.PromoteToPrivilegedContractProposal): _14.PromoteToPrivilegedContractProposalProtoMsg;
                };
                DemotePrivilegedContractProposal: {
                    typeUrl: string;
                    encode(message: _14.DemotePrivilegedContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.DemotePrivilegedContractProposal;
                    fromPartial(object: Partial<_14.DemotePrivilegedContractProposal>): _14.DemotePrivilegedContractProposal;
                    fromAmino(object: _14.DemotePrivilegedContractProposalAmino): _14.DemotePrivilegedContractProposal;
                    toAmino(message: _14.DemotePrivilegedContractProposal): _14.DemotePrivilegedContractProposalAmino;
                    fromAminoMsg(object: _14.DemotePrivilegedContractProposalAminoMsg): _14.DemotePrivilegedContractProposal;
                    fromProtoMsg(message: _14.DemotePrivilegedContractProposalProtoMsg): _14.DemotePrivilegedContractProposal;
                    toProto(message: _14.DemotePrivilegedContractProposal): Uint8Array;
                    toProtoMsg(message: _14.DemotePrivilegedContractProposal): _14.DemotePrivilegedContractProposalProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.GenesisState;
                    fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                    fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                    toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                    fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                    fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                    toProto(message: _13.GenesisState): Uint8Array;
                    toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
                };
            };
        }
        namespace globalfee {
            const v1: {
                MsgClientImpl: typeof _147.MsgClientImpl;
                QueryClientImpl: typeof _144.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    codeAuthorization(request: _19.QueryCodeAuthorizationRequest): Promise<_19.QueryCodeAuthorizationResponse>;
                    contractAuthorization(request: _19.QueryContractAuthorizationRequest): Promise<_19.QueryContractAuthorizationResponse>;
                    params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                    authorizations(request?: _19.QueryAuthorizationsRequest): Promise<_19.QueryAuthorizationsResponse>;
                };
                LCDQueryClient: typeof _140.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        setCodeAuthorization(value: _20.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeCodeAuthorization(value: _20.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        setContractAuthorization(value: _20.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeContractAuthorization(value: _20.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        setCodeAuthorization(value: _20.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: _20.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: _20.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: _20.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveContractAuthorization;
                        };
                    };
                    fromJSON: {
                        setCodeAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: any): {
                            typeUrl: string;
                            value: _20.MsgRemoveContractAuthorization;
                        };
                    };
                    fromPartial: {
                        setCodeAuthorization(value: _20.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: _20.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: _20.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: _20.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: _20.MsgRemoveContractAuthorization;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
                        aminoType: string;
                        toAmino: (message: _20.MsgSetCodeAuthorization) => _20.MsgSetCodeAuthorizationAmino;
                        fromAmino: (object: _20.MsgSetCodeAuthorizationAmino) => _20.MsgSetCodeAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
                        aminoType: string;
                        toAmino: (message: _20.MsgRemoveCodeAuthorization) => _20.MsgRemoveCodeAuthorizationAmino;
                        fromAmino: (object: _20.MsgRemoveCodeAuthorizationAmino) => _20.MsgRemoveCodeAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
                        aminoType: string;
                        toAmino: (message: _20.MsgSetContractAuthorization) => _20.MsgSetContractAuthorizationAmino;
                        fromAmino: (object: _20.MsgSetContractAuthorizationAmino) => _20.MsgSetContractAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
                        aminoType: string;
                        toAmino: (message: _20.MsgRemoveContractAuthorization) => _20.MsgRemoveContractAuthorizationAmino;
                        fromAmino: (object: _20.MsgRemoveContractAuthorizationAmino) => _20.MsgRemoveContractAuthorization;
                    };
                };
                MsgSetCodeAuthorization: {
                    typeUrl: string;
                    encode(message: _20.MsgSetCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgSetCodeAuthorization;
                    fromPartial(object: Partial<_20.MsgSetCodeAuthorization>): _20.MsgSetCodeAuthorization;
                    fromAmino(object: _20.MsgSetCodeAuthorizationAmino): _20.MsgSetCodeAuthorization;
                    toAmino(message: _20.MsgSetCodeAuthorization): _20.MsgSetCodeAuthorizationAmino;
                    fromAminoMsg(object: _20.MsgSetCodeAuthorizationAminoMsg): _20.MsgSetCodeAuthorization;
                    fromProtoMsg(message: _20.MsgSetCodeAuthorizationProtoMsg): _20.MsgSetCodeAuthorization;
                    toProto(message: _20.MsgSetCodeAuthorization): Uint8Array;
                    toProtoMsg(message: _20.MsgSetCodeAuthorization): _20.MsgSetCodeAuthorizationProtoMsg;
                };
                MsgSetCodeAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _20.MsgSetCodeAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.MsgSetCodeAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgSetCodeAuthorizationResponse>): _20.MsgSetCodeAuthorizationResponse;
                    fromAmino(_: _20.MsgSetCodeAuthorizationResponseAmino): _20.MsgSetCodeAuthorizationResponse;
                    toAmino(_: _20.MsgSetCodeAuthorizationResponse): _20.MsgSetCodeAuthorizationResponseAmino;
                    fromAminoMsg(object: _20.MsgSetCodeAuthorizationResponseAminoMsg): _20.MsgSetCodeAuthorizationResponse;
                    fromProtoMsg(message: _20.MsgSetCodeAuthorizationResponseProtoMsg): _20.MsgSetCodeAuthorizationResponse;
                    toProto(message: _20.MsgSetCodeAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _20.MsgSetCodeAuthorizationResponse): _20.MsgSetCodeAuthorizationResponseProtoMsg;
                };
                MsgRemoveCodeAuthorization: {
                    typeUrl: string;
                    encode(message: _20.MsgRemoveCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgRemoveCodeAuthorization;
                    fromPartial(object: Partial<_20.MsgRemoveCodeAuthorization>): _20.MsgRemoveCodeAuthorization;
                    fromAmino(object: _20.MsgRemoveCodeAuthorizationAmino): _20.MsgRemoveCodeAuthorization;
                    toAmino(message: _20.MsgRemoveCodeAuthorization): _20.MsgRemoveCodeAuthorizationAmino;
                    fromAminoMsg(object: _20.MsgRemoveCodeAuthorizationAminoMsg): _20.MsgRemoveCodeAuthorization;
                    fromProtoMsg(message: _20.MsgRemoveCodeAuthorizationProtoMsg): _20.MsgRemoveCodeAuthorization;
                    toProto(message: _20.MsgRemoveCodeAuthorization): Uint8Array;
                    toProtoMsg(message: _20.MsgRemoveCodeAuthorization): _20.MsgRemoveCodeAuthorizationProtoMsg;
                };
                MsgRemoveCodeAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _20.MsgRemoveCodeAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.MsgRemoveCodeAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgRemoveCodeAuthorizationResponse>): _20.MsgRemoveCodeAuthorizationResponse;
                    fromAmino(_: _20.MsgRemoveCodeAuthorizationResponseAmino): _20.MsgRemoveCodeAuthorizationResponse;
                    toAmino(_: _20.MsgRemoveCodeAuthorizationResponse): _20.MsgRemoveCodeAuthorizationResponseAmino;
                    fromAminoMsg(object: _20.MsgRemoveCodeAuthorizationResponseAminoMsg): _20.MsgRemoveCodeAuthorizationResponse;
                    fromProtoMsg(message: _20.MsgRemoveCodeAuthorizationResponseProtoMsg): _20.MsgRemoveCodeAuthorizationResponse;
                    toProto(message: _20.MsgRemoveCodeAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _20.MsgRemoveCodeAuthorizationResponse): _20.MsgRemoveCodeAuthorizationResponseProtoMsg;
                };
                MsgSetContractAuthorization: {
                    typeUrl: string;
                    encode(message: _20.MsgSetContractAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgSetContractAuthorization;
                    fromPartial(object: Partial<_20.MsgSetContractAuthorization>): _20.MsgSetContractAuthorization;
                    fromAmino(object: _20.MsgSetContractAuthorizationAmino): _20.MsgSetContractAuthorization;
                    toAmino(message: _20.MsgSetContractAuthorization): _20.MsgSetContractAuthorizationAmino;
                    fromAminoMsg(object: _20.MsgSetContractAuthorizationAminoMsg): _20.MsgSetContractAuthorization;
                    fromProtoMsg(message: _20.MsgSetContractAuthorizationProtoMsg): _20.MsgSetContractAuthorization;
                    toProto(message: _20.MsgSetContractAuthorization): Uint8Array;
                    toProtoMsg(message: _20.MsgSetContractAuthorization): _20.MsgSetContractAuthorizationProtoMsg;
                };
                MsgSetContractAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _20.MsgSetContractAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.MsgSetContractAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgSetContractAuthorizationResponse>): _20.MsgSetContractAuthorizationResponse;
                    fromAmino(_: _20.MsgSetContractAuthorizationResponseAmino): _20.MsgSetContractAuthorizationResponse;
                    toAmino(_: _20.MsgSetContractAuthorizationResponse): _20.MsgSetContractAuthorizationResponseAmino;
                    fromAminoMsg(object: _20.MsgSetContractAuthorizationResponseAminoMsg): _20.MsgSetContractAuthorizationResponse;
                    fromProtoMsg(message: _20.MsgSetContractAuthorizationResponseProtoMsg): _20.MsgSetContractAuthorizationResponse;
                    toProto(message: _20.MsgSetContractAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _20.MsgSetContractAuthorizationResponse): _20.MsgSetContractAuthorizationResponseProtoMsg;
                };
                MsgRemoveContractAuthorization: {
                    typeUrl: string;
                    encode(message: _20.MsgRemoveContractAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.MsgRemoveContractAuthorization;
                    fromPartial(object: Partial<_20.MsgRemoveContractAuthorization>): _20.MsgRemoveContractAuthorization;
                    fromAmino(object: _20.MsgRemoveContractAuthorizationAmino): _20.MsgRemoveContractAuthorization;
                    toAmino(message: _20.MsgRemoveContractAuthorization): _20.MsgRemoveContractAuthorizationAmino;
                    fromAminoMsg(object: _20.MsgRemoveContractAuthorizationAminoMsg): _20.MsgRemoveContractAuthorization;
                    fromProtoMsg(message: _20.MsgRemoveContractAuthorizationProtoMsg): _20.MsgRemoveContractAuthorization;
                    toProto(message: _20.MsgRemoveContractAuthorization): Uint8Array;
                    toProtoMsg(message: _20.MsgRemoveContractAuthorization): _20.MsgRemoveContractAuthorizationProtoMsg;
                };
                MsgRemoveContractAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _20.MsgRemoveContractAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.MsgRemoveContractAuthorizationResponse;
                    fromPartial(_: Partial<_20.MsgRemoveContractAuthorizationResponse>): _20.MsgRemoveContractAuthorizationResponse;
                    fromAmino(_: _20.MsgRemoveContractAuthorizationResponseAmino): _20.MsgRemoveContractAuthorizationResponse;
                    toAmino(_: _20.MsgRemoveContractAuthorizationResponse): _20.MsgRemoveContractAuthorizationResponseAmino;
                    fromAminoMsg(object: _20.MsgRemoveContractAuthorizationResponseAminoMsg): _20.MsgRemoveContractAuthorizationResponse;
                    fromProtoMsg(message: _20.MsgRemoveContractAuthorizationResponseProtoMsg): _20.MsgRemoveContractAuthorizationResponse;
                    toProto(message: _20.MsgRemoveContractAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _20.MsgRemoveContractAuthorizationResponse): _20.MsgRemoveContractAuthorizationResponseProtoMsg;
                };
                QueryCodeAuthorizationRequest: {
                    typeUrl: string;
                    encode(message: _19.QueryCodeAuthorizationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.QueryCodeAuthorizationRequest;
                    fromPartial(object: Partial<_19.QueryCodeAuthorizationRequest>): _19.QueryCodeAuthorizationRequest;
                    fromAmino(object: _19.QueryCodeAuthorizationRequestAmino): _19.QueryCodeAuthorizationRequest;
                    toAmino(message: _19.QueryCodeAuthorizationRequest): _19.QueryCodeAuthorizationRequestAmino;
                    fromAminoMsg(object: _19.QueryCodeAuthorizationRequestAminoMsg): _19.QueryCodeAuthorizationRequest;
                    fromProtoMsg(message: _19.QueryCodeAuthorizationRequestProtoMsg): _19.QueryCodeAuthorizationRequest;
                    toProto(message: _19.QueryCodeAuthorizationRequest): Uint8Array;
                    toProtoMsg(message: _19.QueryCodeAuthorizationRequest): _19.QueryCodeAuthorizationRequestProtoMsg;
                };
                QueryCodeAuthorizationResponse: {
                    typeUrl: string;
                    encode(message: _19.QueryCodeAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.QueryCodeAuthorizationResponse;
                    fromPartial(object: Partial<_19.QueryCodeAuthorizationResponse>): _19.QueryCodeAuthorizationResponse;
                    fromAmino(object: _19.QueryCodeAuthorizationResponseAmino): _19.QueryCodeAuthorizationResponse;
                    toAmino(message: _19.QueryCodeAuthorizationResponse): _19.QueryCodeAuthorizationResponseAmino;
                    fromAminoMsg(object: _19.QueryCodeAuthorizationResponseAminoMsg): _19.QueryCodeAuthorizationResponse;
                    fromProtoMsg(message: _19.QueryCodeAuthorizationResponseProtoMsg): _19.QueryCodeAuthorizationResponse;
                    toProto(message: _19.QueryCodeAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _19.QueryCodeAuthorizationResponse): _19.QueryCodeAuthorizationResponseProtoMsg;
                };
                QueryContractAuthorizationRequest: {
                    typeUrl: string;
                    encode(message: _19.QueryContractAuthorizationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.QueryContractAuthorizationRequest;
                    fromPartial(object: Partial<_19.QueryContractAuthorizationRequest>): _19.QueryContractAuthorizationRequest;
                    fromAmino(object: _19.QueryContractAuthorizationRequestAmino): _19.QueryContractAuthorizationRequest;
                    toAmino(message: _19.QueryContractAuthorizationRequest): _19.QueryContractAuthorizationRequestAmino;
                    fromAminoMsg(object: _19.QueryContractAuthorizationRequestAminoMsg): _19.QueryContractAuthorizationRequest;
                    fromProtoMsg(message: _19.QueryContractAuthorizationRequestProtoMsg): _19.QueryContractAuthorizationRequest;
                    toProto(message: _19.QueryContractAuthorizationRequest): Uint8Array;
                    toProtoMsg(message: _19.QueryContractAuthorizationRequest): _19.QueryContractAuthorizationRequestProtoMsg;
                };
                QueryContractAuthorizationResponse: {
                    typeUrl: string;
                    encode(message: _19.QueryContractAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.QueryContractAuthorizationResponse;
                    fromPartial(object: Partial<_19.QueryContractAuthorizationResponse>): _19.QueryContractAuthorizationResponse;
                    fromAmino(object: _19.QueryContractAuthorizationResponseAmino): _19.QueryContractAuthorizationResponse;
                    toAmino(message: _19.QueryContractAuthorizationResponse): _19.QueryContractAuthorizationResponseAmino;
                    fromAminoMsg(object: _19.QueryContractAuthorizationResponseAminoMsg): _19.QueryContractAuthorizationResponse;
                    fromProtoMsg(message: _19.QueryContractAuthorizationResponseProtoMsg): _19.QueryContractAuthorizationResponse;
                    toProto(message: _19.QueryContractAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _19.QueryContractAuthorizationResponse): _19.QueryContractAuthorizationResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _19.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _19.QueryParamsRequest;
                    fromPartial(_: Partial<_19.QueryParamsRequest>): _19.QueryParamsRequest;
                    fromAmino(_: _19.QueryParamsRequestAmino): _19.QueryParamsRequest;
                    toAmino(_: _19.QueryParamsRequest): _19.QueryParamsRequestAmino;
                    fromAminoMsg(object: _19.QueryParamsRequestAminoMsg): _19.QueryParamsRequest;
                    fromProtoMsg(message: _19.QueryParamsRequestProtoMsg): _19.QueryParamsRequest;
                    toProto(message: _19.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _19.QueryParamsRequest): _19.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _19.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.QueryParamsResponse;
                    fromPartial(object: Partial<_19.QueryParamsResponse>): _19.QueryParamsResponse;
                    fromAmino(object: _19.QueryParamsResponseAmino): _19.QueryParamsResponse;
                    toAmino(message: _19.QueryParamsResponse): _19.QueryParamsResponseAmino;
                    fromAminoMsg(object: _19.QueryParamsResponseAminoMsg): _19.QueryParamsResponse;
                    fromProtoMsg(message: _19.QueryParamsResponseProtoMsg): _19.QueryParamsResponse;
                    toProto(message: _19.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _19.QueryParamsResponse): _19.QueryParamsResponseProtoMsg;
                };
                QueryAuthorizationsRequest: {
                    typeUrl: string;
                    encode(_: _19.QueryAuthorizationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _19.QueryAuthorizationsRequest;
                    fromPartial(_: Partial<_19.QueryAuthorizationsRequest>): _19.QueryAuthorizationsRequest;
                    fromAmino(_: _19.QueryAuthorizationsRequestAmino): _19.QueryAuthorizationsRequest;
                    toAmino(_: _19.QueryAuthorizationsRequest): _19.QueryAuthorizationsRequestAmino;
                    fromAminoMsg(object: _19.QueryAuthorizationsRequestAminoMsg): _19.QueryAuthorizationsRequest;
                    fromProtoMsg(message: _19.QueryAuthorizationsRequestProtoMsg): _19.QueryAuthorizationsRequest;
                    toProto(message: _19.QueryAuthorizationsRequest): Uint8Array;
                    toProtoMsg(message: _19.QueryAuthorizationsRequest): _19.QueryAuthorizationsRequestProtoMsg;
                };
                QueryAuthorizationsResponse: {
                    typeUrl: string;
                    encode(message: _19.QueryAuthorizationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.QueryAuthorizationsResponse;
                    fromPartial(object: Partial<_19.QueryAuthorizationsResponse>): _19.QueryAuthorizationsResponse;
                    fromAmino(object: _19.QueryAuthorizationsResponseAmino): _19.QueryAuthorizationsResponse;
                    toAmino(message: _19.QueryAuthorizationsResponse): _19.QueryAuthorizationsResponseAmino;
                    fromAminoMsg(object: _19.QueryAuthorizationsResponseAminoMsg): _19.QueryAuthorizationsResponse;
                    fromProtoMsg(message: _19.QueryAuthorizationsResponseProtoMsg): _19.QueryAuthorizationsResponse;
                    toProto(message: _19.QueryAuthorizationsResponse): Uint8Array;
                    toProtoMsg(message: _19.QueryAuthorizationsResponse): _19.QueryAuthorizationsResponseProtoMsg;
                };
                SetCodeAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _18.SetCodeAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.SetCodeAuthorizationProposal;
                    fromPartial(object: Partial<_18.SetCodeAuthorizationProposal>): _18.SetCodeAuthorizationProposal;
                    fromAmino(object: _18.SetCodeAuthorizationProposalAmino): _18.SetCodeAuthorizationProposal;
                    toAmino(message: _18.SetCodeAuthorizationProposal): _18.SetCodeAuthorizationProposalAmino;
                    fromAminoMsg(object: _18.SetCodeAuthorizationProposalAminoMsg): _18.SetCodeAuthorizationProposal;
                    fromProtoMsg(message: _18.SetCodeAuthorizationProposalProtoMsg): _18.SetCodeAuthorizationProposal;
                    toProto(message: _18.SetCodeAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _18.SetCodeAuthorizationProposal): _18.SetCodeAuthorizationProposalProtoMsg;
                };
                RemoveCodeAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _18.RemoveCodeAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.RemoveCodeAuthorizationProposal;
                    fromPartial(object: Partial<_18.RemoveCodeAuthorizationProposal>): _18.RemoveCodeAuthorizationProposal;
                    fromAmino(object: _18.RemoveCodeAuthorizationProposalAmino): _18.RemoveCodeAuthorizationProposal;
                    toAmino(message: _18.RemoveCodeAuthorizationProposal): _18.RemoveCodeAuthorizationProposalAmino;
                    fromAminoMsg(object: _18.RemoveCodeAuthorizationProposalAminoMsg): _18.RemoveCodeAuthorizationProposal;
                    fromProtoMsg(message: _18.RemoveCodeAuthorizationProposalProtoMsg): _18.RemoveCodeAuthorizationProposal;
                    toProto(message: _18.RemoveCodeAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _18.RemoveCodeAuthorizationProposal): _18.RemoveCodeAuthorizationProposalProtoMsg;
                };
                SetContractAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _18.SetContractAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.SetContractAuthorizationProposal;
                    fromPartial(object: Partial<_18.SetContractAuthorizationProposal>): _18.SetContractAuthorizationProposal;
                    fromAmino(object: _18.SetContractAuthorizationProposalAmino): _18.SetContractAuthorizationProposal;
                    toAmino(message: _18.SetContractAuthorizationProposal): _18.SetContractAuthorizationProposalAmino;
                    fromAminoMsg(object: _18.SetContractAuthorizationProposalAminoMsg): _18.SetContractAuthorizationProposal;
                    fromProtoMsg(message: _18.SetContractAuthorizationProposalProtoMsg): _18.SetContractAuthorizationProposal;
                    toProto(message: _18.SetContractAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _18.SetContractAuthorizationProposal): _18.SetContractAuthorizationProposalProtoMsg;
                };
                RemoveContractAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _18.RemoveContractAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.RemoveContractAuthorizationProposal;
                    fromPartial(object: Partial<_18.RemoveContractAuthorizationProposal>): _18.RemoveContractAuthorizationProposal;
                    fromAmino(object: _18.RemoveContractAuthorizationProposalAmino): _18.RemoveContractAuthorizationProposal;
                    toAmino(message: _18.RemoveContractAuthorizationProposal): _18.RemoveContractAuthorizationProposalAmino;
                    fromAminoMsg(object: _18.RemoveContractAuthorizationProposalAminoMsg): _18.RemoveContractAuthorizationProposal;
                    fromProtoMsg(message: _18.RemoveContractAuthorizationProposalProtoMsg): _18.RemoveContractAuthorizationProposal;
                    toProto(message: _18.RemoveContractAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _18.RemoveContractAuthorizationProposal): _18.RemoveContractAuthorizationProposalProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _17.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.Params;
                    fromPartial(object: Partial<_17.Params>): _17.Params;
                    fromAmino(object: _17.ParamsAmino): _17.Params;
                    toAmino(message: _17.Params): _17.ParamsAmino;
                    fromAminoMsg(object: _17.ParamsAminoMsg): _17.Params;
                    fromProtoMsg(message: _17.ParamsProtoMsg): _17.Params;
                    toProto(message: _17.Params): Uint8Array;
                    toProtoMsg(message: _17.Params): _17.ParamsProtoMsg;
                };
                CodeAuthorization: {
                    typeUrl: string;
                    encode(message: _17.CodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.CodeAuthorization;
                    fromPartial(object: Partial<_17.CodeAuthorization>): _17.CodeAuthorization;
                    fromAmino(object: _17.CodeAuthorizationAmino): _17.CodeAuthorization;
                    toAmino(message: _17.CodeAuthorization): _17.CodeAuthorizationAmino;
                    fromAminoMsg(object: _17.CodeAuthorizationAminoMsg): _17.CodeAuthorization;
                    fromProtoMsg(message: _17.CodeAuthorizationProtoMsg): _17.CodeAuthorization;
                    toProto(message: _17.CodeAuthorization): Uint8Array;
                    toProtoMsg(message: _17.CodeAuthorization): _17.CodeAuthorizationProtoMsg;
                };
                ContractAuthorization: {
                    typeUrl: string;
                    encode(message: _17.ContractAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ContractAuthorization;
                    fromPartial(object: Partial<_17.ContractAuthorization>): _17.ContractAuthorization;
                    fromAmino(object: _17.ContractAuthorizationAmino): _17.ContractAuthorization;
                    toAmino(message: _17.ContractAuthorization): _17.ContractAuthorizationAmino;
                    fromAminoMsg(object: _17.ContractAuthorizationAminoMsg): _17.ContractAuthorization;
                    fromProtoMsg(message: _17.ContractAuthorizationProtoMsg): _17.ContractAuthorization;
                    toProto(message: _17.ContractAuthorization): Uint8Array;
                    toProtoMsg(message: _17.ContractAuthorization): _17.ContractAuthorizationProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.GenesisState;
                    fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                    fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                    toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                    fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                    fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                    toProto(message: _16.GenesisState): Uint8Array;
                    toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _145.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _146.MsgClientImpl;
                    };
                    globalfee: {
                        v1: _147.MsgClientImpl;
                    };
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: {
                            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        };
                    };
                    claim: {
                        v1beta1: {
                            moduleAccountBalance(request?: _11.QueryModuleAccountBalanceRequest): Promise<_11.QueryModuleAccountBalanceResponse>;
                            params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                            claimRecord(request: _11.QueryClaimRecordRequest): Promise<_11.QueryClaimRecordResponse>;
                            claimableForAction(request: _11.QueryClaimableForActionRequest): Promise<_11.QueryClaimableForActionResponse>;
                            totalClaimable(request: _11.QueryTotalClaimableRequest): Promise<_11.QueryTotalClaimableResponse>;
                        };
                    };
                    cron: {
                        v1: {
                            listPrivileged(request?: _15.QueryListPrivilegedRequest): Promise<_15.QueryListPrivilegedResponse>;
                        };
                    };
                    globalfee: {
                        v1: {
                            codeAuthorization(request: _19.QueryCodeAuthorizationRequest): Promise<_19.QueryCodeAuthorizationResponse>;
                            contractAuthorization(request: _19.QueryContractAuthorizationRequest): Promise<_19.QueryContractAuthorizationResponse>;
                            params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                            authorizations(request?: _19.QueryAuthorizationsRequest): Promise<_19.QueryAuthorizationsResponse>;
                        };
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _137.LCDQueryClient;
                    };
                    claim: {
                        v1beta1: _138.LCDQueryClient;
                    };
                    cron: {
                        v1: _139.LCDQueryClient;
                    };
                    globalfee: {
                        v1: _140.LCDQueryClient;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
