import * as _4 from "./stargaze/alloc/v1beta1/genesis";
import * as _5 from "./stargaze/alloc/v1beta1/params";
import * as _6 from "./stargaze/alloc/v1beta1/query";
import * as _7 from "./stargaze/alloc/v1beta1/tx";
import * as _8 from "./stargaze/cron/v1/cron";
import * as _9 from "./stargaze/cron/v1/genesis";
import * as _10 from "./stargaze/cron/v1/proposal";
import * as _11 from "./stargaze/cron/v1/query";
import * as _12 from "./stargaze/cron/v1/tx";
import * as _13 from "./stargaze/globalfee/v1/genesis";
import * as _14 from "./stargaze/globalfee/v1/globalfee";
import * as _15 from "./stargaze/globalfee/v1/proposal";
import * as _16 from "./stargaze/globalfee/v1/query";
import * as _17 from "./stargaze/globalfee/v1/tx";
import * as _18 from "./stargaze/mint/v1beta1/genesis";
import * as _19 from "./stargaze/mint/v1beta1/mint";
import * as _20 from "./stargaze/mint/v1beta1/query";
import * as _185 from "./stargaze/alloc/v1beta1/query.lcd";
import * as _186 from "./stargaze/cron/v1/query.lcd";
import * as _187 from "./stargaze/globalfee/v1/query.lcd";
import * as _188 from "./stargaze/mint/v1beta1/query.lcd";
import * as _189 from "./stargaze/alloc/v1beta1/query.rpc.Query";
import * as _190 from "./stargaze/cron/v1/query.rpc.Query";
import * as _191 from "./stargaze/globalfee/v1/query.rpc.Query";
import * as _192 from "./stargaze/mint/v1beta1/query.rpc.Query";
import * as _193 from "./stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _194 from "./stargaze/cron/v1/tx.rpc.msg";
import * as _195 from "./stargaze/globalfee/v1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _193.MsgClientImpl;
                QueryClientImpl: typeof _189.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _185.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
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
        namespace cron {
            const v1: {
                MsgClientImpl: typeof _194.MsgClientImpl;
                QueryClientImpl: typeof _190.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    listPrivileged(request?: _11.QueryListPrivilegedRequest): Promise<_11.QueryListPrivilegedResponse>;
                    params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _186.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        promoteToPrivilegedContract(value: _12.MsgPromoteToPrivilegedContract): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        demoteFromPrivilegedContract(value: _12.MsgDemoteFromPrivilegedContract): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _12.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        promoteToPrivilegedContract(value: _12.MsgPromoteToPrivilegedContract): {
                            typeUrl: string;
                            value: _12.MsgPromoteToPrivilegedContract;
                        };
                        demoteFromPrivilegedContract(value: _12.MsgDemoteFromPrivilegedContract): {
                            typeUrl: string;
                            value: _12.MsgDemoteFromPrivilegedContract;
                        };
                        updateParams(value: _12.MsgUpdateParams): {
                            typeUrl: string;
                            value: _12.MsgUpdateParams;
                        };
                    };
                    fromJSON: {
                        promoteToPrivilegedContract(value: any): {
                            typeUrl: string;
                            value: _12.MsgPromoteToPrivilegedContract;
                        };
                        demoteFromPrivilegedContract(value: any): {
                            typeUrl: string;
                            value: _12.MsgDemoteFromPrivilegedContract;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _12.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        promoteToPrivilegedContract(value: _12.MsgPromoteToPrivilegedContract): {
                            typeUrl: string;
                            value: _12.MsgPromoteToPrivilegedContract;
                        };
                        demoteFromPrivilegedContract(value: _12.MsgDemoteFromPrivilegedContract): {
                            typeUrl: string;
                            value: _12.MsgDemoteFromPrivilegedContract;
                        };
                        updateParams(value: _12.MsgUpdateParams): {
                            typeUrl: string;
                            value: _12.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract": {
                        aminoType: string;
                        toAmino: (message: _12.MsgPromoteToPrivilegedContract) => _12.MsgPromoteToPrivilegedContractAmino;
                        fromAmino: (object: _12.MsgPromoteToPrivilegedContractAmino) => _12.MsgPromoteToPrivilegedContract;
                    };
                    "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract": {
                        aminoType: string;
                        toAmino: (message: _12.MsgDemoteFromPrivilegedContract) => _12.MsgDemoteFromPrivilegedContractAmino;
                        fromAmino: (object: _12.MsgDemoteFromPrivilegedContractAmino) => _12.MsgDemoteFromPrivilegedContract;
                    };
                    "/publicawesome.stargaze.cron.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _12.MsgUpdateParams) => _12.MsgUpdateParamsAmino;
                        fromAmino: (object: _12.MsgUpdateParamsAmino) => _12.MsgUpdateParams;
                    };
                };
                MsgPromoteToPrivilegedContract: {
                    typeUrl: string;
                    encode(message: _12.MsgPromoteToPrivilegedContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgPromoteToPrivilegedContract;
                    fromPartial(object: Partial<_12.MsgPromoteToPrivilegedContract>): _12.MsgPromoteToPrivilegedContract;
                    fromAmino(object: _12.MsgPromoteToPrivilegedContractAmino): _12.MsgPromoteToPrivilegedContract;
                    toAmino(message: _12.MsgPromoteToPrivilegedContract): _12.MsgPromoteToPrivilegedContractAmino;
                    fromAminoMsg(object: _12.MsgPromoteToPrivilegedContractAminoMsg): _12.MsgPromoteToPrivilegedContract;
                    fromProtoMsg(message: _12.MsgPromoteToPrivilegedContractProtoMsg): _12.MsgPromoteToPrivilegedContract;
                    toProto(message: _12.MsgPromoteToPrivilegedContract): Uint8Array;
                    toProtoMsg(message: _12.MsgPromoteToPrivilegedContract): _12.MsgPromoteToPrivilegedContractProtoMsg;
                };
                MsgPromoteToPrivilegedContractResponse: {
                    typeUrl: string;
                    encode(_: _12.MsgPromoteToPrivilegedContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _12.MsgPromoteToPrivilegedContractResponse;
                    fromPartial(_: Partial<_12.MsgPromoteToPrivilegedContractResponse>): _12.MsgPromoteToPrivilegedContractResponse;
                    fromAmino(_: _12.MsgPromoteToPrivilegedContractResponseAmino): _12.MsgPromoteToPrivilegedContractResponse;
                    toAmino(_: _12.MsgPromoteToPrivilegedContractResponse): _12.MsgPromoteToPrivilegedContractResponseAmino;
                    fromAminoMsg(object: _12.MsgPromoteToPrivilegedContractResponseAminoMsg): _12.MsgPromoteToPrivilegedContractResponse;
                    fromProtoMsg(message: _12.MsgPromoteToPrivilegedContractResponseProtoMsg): _12.MsgPromoteToPrivilegedContractResponse;
                    toProto(message: _12.MsgPromoteToPrivilegedContractResponse): Uint8Array;
                    toProtoMsg(message: _12.MsgPromoteToPrivilegedContractResponse): _12.MsgPromoteToPrivilegedContractResponseProtoMsg;
                };
                MsgDemoteFromPrivilegedContract: {
                    typeUrl: string;
                    encode(message: _12.MsgDemoteFromPrivilegedContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgDemoteFromPrivilegedContract;
                    fromPartial(object: Partial<_12.MsgDemoteFromPrivilegedContract>): _12.MsgDemoteFromPrivilegedContract;
                    fromAmino(object: _12.MsgDemoteFromPrivilegedContractAmino): _12.MsgDemoteFromPrivilegedContract;
                    toAmino(message: _12.MsgDemoteFromPrivilegedContract): _12.MsgDemoteFromPrivilegedContractAmino;
                    fromAminoMsg(object: _12.MsgDemoteFromPrivilegedContractAminoMsg): _12.MsgDemoteFromPrivilegedContract;
                    fromProtoMsg(message: _12.MsgDemoteFromPrivilegedContractProtoMsg): _12.MsgDemoteFromPrivilegedContract;
                    toProto(message: _12.MsgDemoteFromPrivilegedContract): Uint8Array;
                    toProtoMsg(message: _12.MsgDemoteFromPrivilegedContract): _12.MsgDemoteFromPrivilegedContractProtoMsg;
                };
                MsgDemoteFromPrivilegedContractResponse: {
                    typeUrl: string;
                    encode(_: _12.MsgDemoteFromPrivilegedContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _12.MsgDemoteFromPrivilegedContractResponse;
                    fromPartial(_: Partial<_12.MsgDemoteFromPrivilegedContractResponse>): _12.MsgDemoteFromPrivilegedContractResponse;
                    fromAmino(_: _12.MsgDemoteFromPrivilegedContractResponseAmino): _12.MsgDemoteFromPrivilegedContractResponse;
                    toAmino(_: _12.MsgDemoteFromPrivilegedContractResponse): _12.MsgDemoteFromPrivilegedContractResponseAmino;
                    fromAminoMsg(object: _12.MsgDemoteFromPrivilegedContractResponseAminoMsg): _12.MsgDemoteFromPrivilegedContractResponse;
                    fromProtoMsg(message: _12.MsgDemoteFromPrivilegedContractResponseProtoMsg): _12.MsgDemoteFromPrivilegedContractResponse;
                    toProto(message: _12.MsgDemoteFromPrivilegedContractResponse): Uint8Array;
                    toProtoMsg(message: _12.MsgDemoteFromPrivilegedContractResponse): _12.MsgDemoteFromPrivilegedContractResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _12.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.MsgUpdateParams;
                    fromPartial(object: Partial<_12.MsgUpdateParams>): _12.MsgUpdateParams;
                    fromAmino(object: _12.MsgUpdateParamsAmino): _12.MsgUpdateParams;
                    toAmino(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _12.MsgUpdateParamsAminoMsg): _12.MsgUpdateParams;
                    fromProtoMsg(message: _12.MsgUpdateParamsProtoMsg): _12.MsgUpdateParams;
                    toProto(message: _12.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _12.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _12.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_12.MsgUpdateParamsResponse>): _12.MsgUpdateParamsResponse;
                    fromAmino(_: _12.MsgUpdateParamsResponseAmino): _12.MsgUpdateParamsResponse;
                    toAmino(_: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _12.MsgUpdateParamsResponseAminoMsg): _12.MsgUpdateParamsResponse;
                    fromProtoMsg(message: _12.MsgUpdateParamsResponseProtoMsg): _12.MsgUpdateParamsResponse;
                    toProto(message: _12.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseProtoMsg;
                };
                QueryListPrivilegedRequest: {
                    typeUrl: string;
                    encode(_: _11.QueryListPrivilegedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _11.QueryListPrivilegedRequest;
                    fromPartial(_: Partial<_11.QueryListPrivilegedRequest>): _11.QueryListPrivilegedRequest;
                    fromAmino(_: _11.QueryListPrivilegedRequestAmino): _11.QueryListPrivilegedRequest;
                    toAmino(_: _11.QueryListPrivilegedRequest): _11.QueryListPrivilegedRequestAmino;
                    fromAminoMsg(object: _11.QueryListPrivilegedRequestAminoMsg): _11.QueryListPrivilegedRequest;
                    fromProtoMsg(message: _11.QueryListPrivilegedRequestProtoMsg): _11.QueryListPrivilegedRequest;
                    toProto(message: _11.QueryListPrivilegedRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryListPrivilegedRequest): _11.QueryListPrivilegedRequestProtoMsg;
                };
                QueryListPrivilegedResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryListPrivilegedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryListPrivilegedResponse;
                    fromPartial(object: Partial<_11.QueryListPrivilegedResponse>): _11.QueryListPrivilegedResponse;
                    fromAmino(object: _11.QueryListPrivilegedResponseAmino): _11.QueryListPrivilegedResponse;
                    toAmino(message: _11.QueryListPrivilegedResponse): _11.QueryListPrivilegedResponseAmino;
                    fromAminoMsg(object: _11.QueryListPrivilegedResponseAminoMsg): _11.QueryListPrivilegedResponse;
                    fromProtoMsg(message: _11.QueryListPrivilegedResponseProtoMsg): _11.QueryListPrivilegedResponse;
                    toProto(message: _11.QueryListPrivilegedResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryListPrivilegedResponse): _11.QueryListPrivilegedResponseProtoMsg;
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
                PromoteToPrivilegedContractProposal: {
                    typeUrl: string;
                    encode(message: _10.PromoteToPrivilegedContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.PromoteToPrivilegedContractProposal;
                    fromPartial(object: Partial<_10.PromoteToPrivilegedContractProposal>): _10.PromoteToPrivilegedContractProposal;
                    fromAmino(object: _10.PromoteToPrivilegedContractProposalAmino): _10.PromoteToPrivilegedContractProposal;
                    toAmino(message: _10.PromoteToPrivilegedContractProposal): _10.PromoteToPrivilegedContractProposalAmino;
                    fromAminoMsg(object: _10.PromoteToPrivilegedContractProposalAminoMsg): _10.PromoteToPrivilegedContractProposal;
                    toAminoMsg(message: _10.PromoteToPrivilegedContractProposal): _10.PromoteToPrivilegedContractProposalAminoMsg;
                    fromProtoMsg(message: _10.PromoteToPrivilegedContractProposalProtoMsg): _10.PromoteToPrivilegedContractProposal;
                    toProto(message: _10.PromoteToPrivilegedContractProposal): Uint8Array;
                    toProtoMsg(message: _10.PromoteToPrivilegedContractProposal): _10.PromoteToPrivilegedContractProposalProtoMsg;
                };
                DemotePrivilegedContractProposal: {
                    typeUrl: string;
                    encode(message: _10.DemotePrivilegedContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.DemotePrivilegedContractProposal;
                    fromPartial(object: Partial<_10.DemotePrivilegedContractProposal>): _10.DemotePrivilegedContractProposal;
                    fromAmino(object: _10.DemotePrivilegedContractProposalAmino): _10.DemotePrivilegedContractProposal;
                    toAmino(message: _10.DemotePrivilegedContractProposal): _10.DemotePrivilegedContractProposalAmino;
                    fromAminoMsg(object: _10.DemotePrivilegedContractProposalAminoMsg): _10.DemotePrivilegedContractProposal;
                    toAminoMsg(message: _10.DemotePrivilegedContractProposal): _10.DemotePrivilegedContractProposalAminoMsg;
                    fromProtoMsg(message: _10.DemotePrivilegedContractProposalProtoMsg): _10.DemotePrivilegedContractProposal;
                    toProto(message: _10.DemotePrivilegedContractProposal): Uint8Array;
                    toProtoMsg(message: _10.DemotePrivilegedContractProposal): _10.DemotePrivilegedContractProposalProtoMsg;
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
                Params: {
                    typeUrl: string;
                    encode(message: _8.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.Params;
                    fromPartial(object: Partial<_8.Params>): _8.Params;
                    fromAmino(object: _8.ParamsAmino): _8.Params;
                    toAmino(message: _8.Params): _8.ParamsAmino;
                    fromAminoMsg(object: _8.ParamsAminoMsg): _8.Params;
                    fromProtoMsg(message: _8.ParamsProtoMsg): _8.Params;
                    toProto(message: _8.Params): Uint8Array;
                    toProtoMsg(message: _8.Params): _8.ParamsProtoMsg;
                };
            };
        }
        namespace globalfee {
            const v1: {
                MsgClientImpl: typeof _195.MsgClientImpl;
                QueryClientImpl: typeof _191.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    codeAuthorization(request: _16.QueryCodeAuthorizationRequest): Promise<_16.QueryCodeAuthorizationResponse>;
                    contractAuthorization(request: _16.QueryContractAuthorizationRequest): Promise<_16.QueryContractAuthorizationResponse>;
                    params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                    authorizations(request?: _16.QueryAuthorizationsRequest): Promise<_16.QueryAuthorizationsResponse>;
                };
                LCDQueryClient: typeof _187.LCDQueryClient;
                registry: readonly [string, GeneratedType][];
                load: (protoRegistry: Registry) => void;
                MessageComposer: {
                    encoded: {
                        setCodeAuthorization(value: _17.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeCodeAuthorization(value: _17.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        setContractAuthorization(value: _17.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeContractAuthorization(value: _17.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _17.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        setCodeAuthorization(value: _17.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: _17.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: _17.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: _17.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: _17.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: _17.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: _17.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: _17.MsgRemoveContractAuthorization;
                        };
                        updateParams(value: _17.MsgUpdateParams): {
                            typeUrl: string;
                            value: _17.MsgUpdateParams;
                        };
                    };
                    fromJSON: {
                        setCodeAuthorization(value: any): {
                            typeUrl: string;
                            value: _17.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: any): {
                            typeUrl: string;
                            value: _17.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: any): {
                            typeUrl: string;
                            value: _17.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: any): {
                            typeUrl: string;
                            value: _17.MsgRemoveContractAuthorization;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _17.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        setCodeAuthorization(value: _17.MsgSetCodeAuthorization): {
                            typeUrl: string;
                            value: _17.MsgSetCodeAuthorization;
                        };
                        removeCodeAuthorization(value: _17.MsgRemoveCodeAuthorization): {
                            typeUrl: string;
                            value: _17.MsgRemoveCodeAuthorization;
                        };
                        setContractAuthorization(value: _17.MsgSetContractAuthorization): {
                            typeUrl: string;
                            value: _17.MsgSetContractAuthorization;
                        };
                        removeContractAuthorization(value: _17.MsgRemoveContractAuthorization): {
                            typeUrl: string;
                            value: _17.MsgRemoveContractAuthorization;
                        };
                        updateParams(value: _17.MsgUpdateParams): {
                            typeUrl: string;
                            value: _17.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
                        aminoType: string;
                        toAmino: (message: _17.MsgSetCodeAuthorization) => _17.MsgSetCodeAuthorizationAmino;
                        fromAmino: (object: _17.MsgSetCodeAuthorizationAmino) => _17.MsgSetCodeAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
                        aminoType: string;
                        toAmino: (message: _17.MsgRemoveCodeAuthorization) => _17.MsgRemoveCodeAuthorizationAmino;
                        fromAmino: (object: _17.MsgRemoveCodeAuthorizationAmino) => _17.MsgRemoveCodeAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
                        aminoType: string;
                        toAmino: (message: _17.MsgSetContractAuthorization) => _17.MsgSetContractAuthorizationAmino;
                        fromAmino: (object: _17.MsgSetContractAuthorizationAmino) => _17.MsgSetContractAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
                        aminoType: string;
                        toAmino: (message: _17.MsgRemoveContractAuthorization) => _17.MsgRemoveContractAuthorizationAmino;
                        fromAmino: (object: _17.MsgRemoveContractAuthorizationAmino) => _17.MsgRemoveContractAuthorization;
                    };
                    "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _17.MsgUpdateParams) => _17.MsgUpdateParamsAmino;
                        fromAmino: (object: _17.MsgUpdateParamsAmino) => _17.MsgUpdateParams;
                    };
                };
                MsgSetCodeAuthorization: {
                    typeUrl: string;
                    encode(message: _17.MsgSetCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.MsgSetCodeAuthorization;
                    fromPartial(object: Partial<_17.MsgSetCodeAuthorization>): _17.MsgSetCodeAuthorization;
                    fromAmino(object: _17.MsgSetCodeAuthorizationAmino): _17.MsgSetCodeAuthorization;
                    toAmino(message: _17.MsgSetCodeAuthorization): _17.MsgSetCodeAuthorizationAmino;
                    fromAminoMsg(object: _17.MsgSetCodeAuthorizationAminoMsg): _17.MsgSetCodeAuthorization;
                    fromProtoMsg(message: _17.MsgSetCodeAuthorizationProtoMsg): _17.MsgSetCodeAuthorization;
                    toProto(message: _17.MsgSetCodeAuthorization): Uint8Array;
                    toProtoMsg(message: _17.MsgSetCodeAuthorization): _17.MsgSetCodeAuthorizationProtoMsg;
                };
                MsgSetCodeAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _17.MsgSetCodeAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.MsgSetCodeAuthorizationResponse;
                    fromPartial(_: Partial<_17.MsgSetCodeAuthorizationResponse>): _17.MsgSetCodeAuthorizationResponse;
                    fromAmino(_: _17.MsgSetCodeAuthorizationResponseAmino): _17.MsgSetCodeAuthorizationResponse;
                    toAmino(_: _17.MsgSetCodeAuthorizationResponse): _17.MsgSetCodeAuthorizationResponseAmino;
                    fromAminoMsg(object: _17.MsgSetCodeAuthorizationResponseAminoMsg): _17.MsgSetCodeAuthorizationResponse;
                    fromProtoMsg(message: _17.MsgSetCodeAuthorizationResponseProtoMsg): _17.MsgSetCodeAuthorizationResponse;
                    toProto(message: _17.MsgSetCodeAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _17.MsgSetCodeAuthorizationResponse): _17.MsgSetCodeAuthorizationResponseProtoMsg;
                };
                MsgRemoveCodeAuthorization: {
                    typeUrl: string;
                    encode(message: _17.MsgRemoveCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.MsgRemoveCodeAuthorization;
                    fromPartial(object: Partial<_17.MsgRemoveCodeAuthorization>): _17.MsgRemoveCodeAuthorization;
                    fromAmino(object: _17.MsgRemoveCodeAuthorizationAmino): _17.MsgRemoveCodeAuthorization;
                    toAmino(message: _17.MsgRemoveCodeAuthorization): _17.MsgRemoveCodeAuthorizationAmino;
                    fromAminoMsg(object: _17.MsgRemoveCodeAuthorizationAminoMsg): _17.MsgRemoveCodeAuthorization;
                    fromProtoMsg(message: _17.MsgRemoveCodeAuthorizationProtoMsg): _17.MsgRemoveCodeAuthorization;
                    toProto(message: _17.MsgRemoveCodeAuthorization): Uint8Array;
                    toProtoMsg(message: _17.MsgRemoveCodeAuthorization): _17.MsgRemoveCodeAuthorizationProtoMsg;
                };
                MsgRemoveCodeAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _17.MsgRemoveCodeAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.MsgRemoveCodeAuthorizationResponse;
                    fromPartial(_: Partial<_17.MsgRemoveCodeAuthorizationResponse>): _17.MsgRemoveCodeAuthorizationResponse;
                    fromAmino(_: _17.MsgRemoveCodeAuthorizationResponseAmino): _17.MsgRemoveCodeAuthorizationResponse;
                    toAmino(_: _17.MsgRemoveCodeAuthorizationResponse): _17.MsgRemoveCodeAuthorizationResponseAmino;
                    fromAminoMsg(object: _17.MsgRemoveCodeAuthorizationResponseAminoMsg): _17.MsgRemoveCodeAuthorizationResponse;
                    fromProtoMsg(message: _17.MsgRemoveCodeAuthorizationResponseProtoMsg): _17.MsgRemoveCodeAuthorizationResponse;
                    toProto(message: _17.MsgRemoveCodeAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _17.MsgRemoveCodeAuthorizationResponse): _17.MsgRemoveCodeAuthorizationResponseProtoMsg;
                };
                MsgSetContractAuthorization: {
                    typeUrl: string;
                    encode(message: _17.MsgSetContractAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.MsgSetContractAuthorization;
                    fromPartial(object: Partial<_17.MsgSetContractAuthorization>): _17.MsgSetContractAuthorization;
                    fromAmino(object: _17.MsgSetContractAuthorizationAmino): _17.MsgSetContractAuthorization;
                    toAmino(message: _17.MsgSetContractAuthorization): _17.MsgSetContractAuthorizationAmino;
                    fromAminoMsg(object: _17.MsgSetContractAuthorizationAminoMsg): _17.MsgSetContractAuthorization;
                    fromProtoMsg(message: _17.MsgSetContractAuthorizationProtoMsg): _17.MsgSetContractAuthorization;
                    toProto(message: _17.MsgSetContractAuthorization): Uint8Array;
                    toProtoMsg(message: _17.MsgSetContractAuthorization): _17.MsgSetContractAuthorizationProtoMsg;
                };
                MsgSetContractAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _17.MsgSetContractAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.MsgSetContractAuthorizationResponse;
                    fromPartial(_: Partial<_17.MsgSetContractAuthorizationResponse>): _17.MsgSetContractAuthorizationResponse;
                    fromAmino(_: _17.MsgSetContractAuthorizationResponseAmino): _17.MsgSetContractAuthorizationResponse;
                    toAmino(_: _17.MsgSetContractAuthorizationResponse): _17.MsgSetContractAuthorizationResponseAmino;
                    fromAminoMsg(object: _17.MsgSetContractAuthorizationResponseAminoMsg): _17.MsgSetContractAuthorizationResponse;
                    fromProtoMsg(message: _17.MsgSetContractAuthorizationResponseProtoMsg): _17.MsgSetContractAuthorizationResponse;
                    toProto(message: _17.MsgSetContractAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _17.MsgSetContractAuthorizationResponse): _17.MsgSetContractAuthorizationResponseProtoMsg;
                };
                MsgRemoveContractAuthorization: {
                    typeUrl: string;
                    encode(message: _17.MsgRemoveContractAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.MsgRemoveContractAuthorization;
                    fromPartial(object: Partial<_17.MsgRemoveContractAuthorization>): _17.MsgRemoveContractAuthorization;
                    fromAmino(object: _17.MsgRemoveContractAuthorizationAmino): _17.MsgRemoveContractAuthorization;
                    toAmino(message: _17.MsgRemoveContractAuthorization): _17.MsgRemoveContractAuthorizationAmino;
                    fromAminoMsg(object: _17.MsgRemoveContractAuthorizationAminoMsg): _17.MsgRemoveContractAuthorization;
                    fromProtoMsg(message: _17.MsgRemoveContractAuthorizationProtoMsg): _17.MsgRemoveContractAuthorization;
                    toProto(message: _17.MsgRemoveContractAuthorization): Uint8Array;
                    toProtoMsg(message: _17.MsgRemoveContractAuthorization): _17.MsgRemoveContractAuthorizationProtoMsg;
                };
                MsgRemoveContractAuthorizationResponse: {
                    typeUrl: string;
                    encode(_: _17.MsgRemoveContractAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.MsgRemoveContractAuthorizationResponse;
                    fromPartial(_: Partial<_17.MsgRemoveContractAuthorizationResponse>): _17.MsgRemoveContractAuthorizationResponse;
                    fromAmino(_: _17.MsgRemoveContractAuthorizationResponseAmino): _17.MsgRemoveContractAuthorizationResponse;
                    toAmino(_: _17.MsgRemoveContractAuthorizationResponse): _17.MsgRemoveContractAuthorizationResponseAmino;
                    fromAminoMsg(object: _17.MsgRemoveContractAuthorizationResponseAminoMsg): _17.MsgRemoveContractAuthorizationResponse;
                    fromProtoMsg(message: _17.MsgRemoveContractAuthorizationResponseProtoMsg): _17.MsgRemoveContractAuthorizationResponse;
                    toProto(message: _17.MsgRemoveContractAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _17.MsgRemoveContractAuthorizationResponse): _17.MsgRemoveContractAuthorizationResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _17.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.MsgUpdateParams;
                    fromPartial(object: Partial<_17.MsgUpdateParams>): _17.MsgUpdateParams;
                    fromAmino(object: _17.MsgUpdateParamsAmino): _17.MsgUpdateParams;
                    toAmino(message: _17.MsgUpdateParams): _17.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _17.MsgUpdateParamsAminoMsg): _17.MsgUpdateParams;
                    fromProtoMsg(message: _17.MsgUpdateParamsProtoMsg): _17.MsgUpdateParams;
                    toProto(message: _17.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _17.MsgUpdateParams): _17.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _17.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_17.MsgUpdateParamsResponse>): _17.MsgUpdateParamsResponse;
                    fromAmino(_: _17.MsgUpdateParamsResponseAmino): _17.MsgUpdateParamsResponse;
                    toAmino(_: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _17.MsgUpdateParamsResponseAminoMsg): _17.MsgUpdateParamsResponse;
                    fromProtoMsg(message: _17.MsgUpdateParamsResponseProtoMsg): _17.MsgUpdateParamsResponse;
                    toProto(message: _17.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseProtoMsg;
                };
                QueryCodeAuthorizationRequest: {
                    typeUrl: string;
                    encode(message: _16.QueryCodeAuthorizationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.QueryCodeAuthorizationRequest;
                    fromPartial(object: Partial<_16.QueryCodeAuthorizationRequest>): _16.QueryCodeAuthorizationRequest;
                    fromAmino(object: _16.QueryCodeAuthorizationRequestAmino): _16.QueryCodeAuthorizationRequest;
                    toAmino(message: _16.QueryCodeAuthorizationRequest): _16.QueryCodeAuthorizationRequestAmino;
                    fromAminoMsg(object: _16.QueryCodeAuthorizationRequestAminoMsg): _16.QueryCodeAuthorizationRequest;
                    fromProtoMsg(message: _16.QueryCodeAuthorizationRequestProtoMsg): _16.QueryCodeAuthorizationRequest;
                    toProto(message: _16.QueryCodeAuthorizationRequest): Uint8Array;
                    toProtoMsg(message: _16.QueryCodeAuthorizationRequest): _16.QueryCodeAuthorizationRequestProtoMsg;
                };
                QueryCodeAuthorizationResponse: {
                    typeUrl: string;
                    encode(message: _16.QueryCodeAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.QueryCodeAuthorizationResponse;
                    fromPartial(object: Partial<_16.QueryCodeAuthorizationResponse>): _16.QueryCodeAuthorizationResponse;
                    fromAmino(object: _16.QueryCodeAuthorizationResponseAmino): _16.QueryCodeAuthorizationResponse;
                    toAmino(message: _16.QueryCodeAuthorizationResponse): _16.QueryCodeAuthorizationResponseAmino;
                    fromAminoMsg(object: _16.QueryCodeAuthorizationResponseAminoMsg): _16.QueryCodeAuthorizationResponse;
                    fromProtoMsg(message: _16.QueryCodeAuthorizationResponseProtoMsg): _16.QueryCodeAuthorizationResponse;
                    toProto(message: _16.QueryCodeAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _16.QueryCodeAuthorizationResponse): _16.QueryCodeAuthorizationResponseProtoMsg;
                };
                QueryContractAuthorizationRequest: {
                    typeUrl: string;
                    encode(message: _16.QueryContractAuthorizationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.QueryContractAuthorizationRequest;
                    fromPartial(object: Partial<_16.QueryContractAuthorizationRequest>): _16.QueryContractAuthorizationRequest;
                    fromAmino(object: _16.QueryContractAuthorizationRequestAmino): _16.QueryContractAuthorizationRequest;
                    toAmino(message: _16.QueryContractAuthorizationRequest): _16.QueryContractAuthorizationRequestAmino;
                    fromAminoMsg(object: _16.QueryContractAuthorizationRequestAminoMsg): _16.QueryContractAuthorizationRequest;
                    fromProtoMsg(message: _16.QueryContractAuthorizationRequestProtoMsg): _16.QueryContractAuthorizationRequest;
                    toProto(message: _16.QueryContractAuthorizationRequest): Uint8Array;
                    toProtoMsg(message: _16.QueryContractAuthorizationRequest): _16.QueryContractAuthorizationRequestProtoMsg;
                };
                QueryContractAuthorizationResponse: {
                    typeUrl: string;
                    encode(message: _16.QueryContractAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.QueryContractAuthorizationResponse;
                    fromPartial(object: Partial<_16.QueryContractAuthorizationResponse>): _16.QueryContractAuthorizationResponse;
                    fromAmino(object: _16.QueryContractAuthorizationResponseAmino): _16.QueryContractAuthorizationResponse;
                    toAmino(message: _16.QueryContractAuthorizationResponse): _16.QueryContractAuthorizationResponseAmino;
                    fromAminoMsg(object: _16.QueryContractAuthorizationResponseAminoMsg): _16.QueryContractAuthorizationResponse;
                    fromProtoMsg(message: _16.QueryContractAuthorizationResponseProtoMsg): _16.QueryContractAuthorizationResponse;
                    toProto(message: _16.QueryContractAuthorizationResponse): Uint8Array;
                    toProtoMsg(message: _16.QueryContractAuthorizationResponse): _16.QueryContractAuthorizationResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _16.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _16.QueryParamsRequest;
                    fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
                    fromAmino(_: _16.QueryParamsRequestAmino): _16.QueryParamsRequest;
                    toAmino(_: _16.QueryParamsRequest): _16.QueryParamsRequestAmino;
                    fromAminoMsg(object: _16.QueryParamsRequestAminoMsg): _16.QueryParamsRequest;
                    fromProtoMsg(message: _16.QueryParamsRequestProtoMsg): _16.QueryParamsRequest;
                    toProto(message: _16.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _16.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.QueryParamsResponse;
                    fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
                    fromAmino(object: _16.QueryParamsResponseAmino): _16.QueryParamsResponse;
                    toAmino(message: _16.QueryParamsResponse): _16.QueryParamsResponseAmino;
                    fromAminoMsg(object: _16.QueryParamsResponseAminoMsg): _16.QueryParamsResponse;
                    fromProtoMsg(message: _16.QueryParamsResponseProtoMsg): _16.QueryParamsResponse;
                    toProto(message: _16.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseProtoMsg;
                };
                QueryAuthorizationsRequest: {
                    typeUrl: string;
                    encode(_: _16.QueryAuthorizationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _16.QueryAuthorizationsRequest;
                    fromPartial(_: Partial<_16.QueryAuthorizationsRequest>): _16.QueryAuthorizationsRequest;
                    fromAmino(_: _16.QueryAuthorizationsRequestAmino): _16.QueryAuthorizationsRequest;
                    toAmino(_: _16.QueryAuthorizationsRequest): _16.QueryAuthorizationsRequestAmino;
                    fromAminoMsg(object: _16.QueryAuthorizationsRequestAminoMsg): _16.QueryAuthorizationsRequest;
                    fromProtoMsg(message: _16.QueryAuthorizationsRequestProtoMsg): _16.QueryAuthorizationsRequest;
                    toProto(message: _16.QueryAuthorizationsRequest): Uint8Array;
                    toProtoMsg(message: _16.QueryAuthorizationsRequest): _16.QueryAuthorizationsRequestProtoMsg;
                };
                QueryAuthorizationsResponse: {
                    typeUrl: string;
                    encode(message: _16.QueryAuthorizationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.QueryAuthorizationsResponse;
                    fromPartial(object: Partial<_16.QueryAuthorizationsResponse>): _16.QueryAuthorizationsResponse;
                    fromAmino(object: _16.QueryAuthorizationsResponseAmino): _16.QueryAuthorizationsResponse;
                    toAmino(message: _16.QueryAuthorizationsResponse): _16.QueryAuthorizationsResponseAmino;
                    fromAminoMsg(object: _16.QueryAuthorizationsResponseAminoMsg): _16.QueryAuthorizationsResponse;
                    fromProtoMsg(message: _16.QueryAuthorizationsResponseProtoMsg): _16.QueryAuthorizationsResponse;
                    toProto(message: _16.QueryAuthorizationsResponse): Uint8Array;
                    toProtoMsg(message: _16.QueryAuthorizationsResponse): _16.QueryAuthorizationsResponseProtoMsg;
                };
                SetCodeAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _15.SetCodeAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.SetCodeAuthorizationProposal;
                    fromPartial(object: Partial<_15.SetCodeAuthorizationProposal>): _15.SetCodeAuthorizationProposal;
                    fromAmino(object: _15.SetCodeAuthorizationProposalAmino): _15.SetCodeAuthorizationProposal;
                    toAmino(message: _15.SetCodeAuthorizationProposal): _15.SetCodeAuthorizationProposalAmino;
                    fromAminoMsg(object: _15.SetCodeAuthorizationProposalAminoMsg): _15.SetCodeAuthorizationProposal;
                    toAminoMsg(message: _15.SetCodeAuthorizationProposal): _15.SetCodeAuthorizationProposalAminoMsg;
                    fromProtoMsg(message: _15.SetCodeAuthorizationProposalProtoMsg): _15.SetCodeAuthorizationProposal;
                    toProto(message: _15.SetCodeAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _15.SetCodeAuthorizationProposal): _15.SetCodeAuthorizationProposalProtoMsg;
                };
                RemoveCodeAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _15.RemoveCodeAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.RemoveCodeAuthorizationProposal;
                    fromPartial(object: Partial<_15.RemoveCodeAuthorizationProposal>): _15.RemoveCodeAuthorizationProposal;
                    fromAmino(object: _15.RemoveCodeAuthorizationProposalAmino): _15.RemoveCodeAuthorizationProposal;
                    toAmino(message: _15.RemoveCodeAuthorizationProposal): _15.RemoveCodeAuthorizationProposalAmino;
                    fromAminoMsg(object: _15.RemoveCodeAuthorizationProposalAminoMsg): _15.RemoveCodeAuthorizationProposal;
                    toAminoMsg(message: _15.RemoveCodeAuthorizationProposal): _15.RemoveCodeAuthorizationProposalAminoMsg;
                    fromProtoMsg(message: _15.RemoveCodeAuthorizationProposalProtoMsg): _15.RemoveCodeAuthorizationProposal;
                    toProto(message: _15.RemoveCodeAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _15.RemoveCodeAuthorizationProposal): _15.RemoveCodeAuthorizationProposalProtoMsg;
                };
                SetContractAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _15.SetContractAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.SetContractAuthorizationProposal;
                    fromPartial(object: Partial<_15.SetContractAuthorizationProposal>): _15.SetContractAuthorizationProposal;
                    fromAmino(object: _15.SetContractAuthorizationProposalAmino): _15.SetContractAuthorizationProposal;
                    toAmino(message: _15.SetContractAuthorizationProposal): _15.SetContractAuthorizationProposalAmino;
                    fromAminoMsg(object: _15.SetContractAuthorizationProposalAminoMsg): _15.SetContractAuthorizationProposal;
                    toAminoMsg(message: _15.SetContractAuthorizationProposal): _15.SetContractAuthorizationProposalAminoMsg;
                    fromProtoMsg(message: _15.SetContractAuthorizationProposalProtoMsg): _15.SetContractAuthorizationProposal;
                    toProto(message: _15.SetContractAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _15.SetContractAuthorizationProposal): _15.SetContractAuthorizationProposalProtoMsg;
                };
                RemoveContractAuthorizationProposal: {
                    typeUrl: string;
                    encode(message: _15.RemoveContractAuthorizationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.RemoveContractAuthorizationProposal;
                    fromPartial(object: Partial<_15.RemoveContractAuthorizationProposal>): _15.RemoveContractAuthorizationProposal;
                    fromAmino(object: _15.RemoveContractAuthorizationProposalAmino): _15.RemoveContractAuthorizationProposal;
                    toAmino(message: _15.RemoveContractAuthorizationProposal): _15.RemoveContractAuthorizationProposalAmino;
                    fromAminoMsg(object: _15.RemoveContractAuthorizationProposalAminoMsg): _15.RemoveContractAuthorizationProposal;
                    toAminoMsg(message: _15.RemoveContractAuthorizationProposal): _15.RemoveContractAuthorizationProposalAminoMsg;
                    fromProtoMsg(message: _15.RemoveContractAuthorizationProposalProtoMsg): _15.RemoveContractAuthorizationProposal;
                    toProto(message: _15.RemoveContractAuthorizationProposal): Uint8Array;
                    toProtoMsg(message: _15.RemoveContractAuthorizationProposal): _15.RemoveContractAuthorizationProposalProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Params;
                    fromPartial(object: Partial<_14.Params>): _14.Params;
                    fromAmino(object: _14.ParamsAmino): _14.Params;
                    toAmino(message: _14.Params): _14.ParamsAmino;
                    fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                    fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                    toProto(message: _14.Params): Uint8Array;
                    toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
                };
                CodeAuthorization: {
                    typeUrl: string;
                    encode(message: _14.CodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.CodeAuthorization;
                    fromPartial(object: Partial<_14.CodeAuthorization>): _14.CodeAuthorization;
                    fromAmino(object: _14.CodeAuthorizationAmino): _14.CodeAuthorization;
                    toAmino(message: _14.CodeAuthorization): _14.CodeAuthorizationAmino;
                    fromAminoMsg(object: _14.CodeAuthorizationAminoMsg): _14.CodeAuthorization;
                    fromProtoMsg(message: _14.CodeAuthorizationProtoMsg): _14.CodeAuthorization;
                    toProto(message: _14.CodeAuthorization): Uint8Array;
                    toProtoMsg(message: _14.CodeAuthorization): _14.CodeAuthorizationProtoMsg;
                };
                ContractAuthorization: {
                    typeUrl: string;
                    encode(message: _14.ContractAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.ContractAuthorization;
                    fromPartial(object: Partial<_14.ContractAuthorization>): _14.ContractAuthorization;
                    fromAmino(object: _14.ContractAuthorizationAmino): _14.ContractAuthorization;
                    toAmino(message: _14.ContractAuthorization): _14.ContractAuthorizationAmino;
                    fromAminoMsg(object: _14.ContractAuthorizationAminoMsg): _14.ContractAuthorization;
                    fromProtoMsg(message: _14.ContractAuthorizationProtoMsg): _14.ContractAuthorization;
                    toProto(message: _14.ContractAuthorization): Uint8Array;
                    toProtoMsg(message: _14.ContractAuthorization): _14.ContractAuthorizationProtoMsg;
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
        namespace mint {
            const v1beta1: {
                QueryClientImpl: typeof _192.QueryClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                    annualProvisions(request?: _20.QueryAnnualProvisionsRequest): Promise<_20.QueryAnnualProvisionsResponse>;
                };
                LCDQueryClient: typeof _188.LCDQueryClient;
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _20.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.QueryParamsRequest;
                    fromPartial(_: Partial<_20.QueryParamsRequest>): _20.QueryParamsRequest;
                    fromAmino(_: _20.QueryParamsRequestAmino): _20.QueryParamsRequest;
                    toAmino(_: _20.QueryParamsRequest): _20.QueryParamsRequestAmino;
                    fromAminoMsg(object: _20.QueryParamsRequestAminoMsg): _20.QueryParamsRequest;
                    fromProtoMsg(message: _20.QueryParamsRequestProtoMsg): _20.QueryParamsRequest;
                    toProto(message: _20.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _20.QueryParamsRequest): _20.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _20.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryParamsResponse;
                    fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
                    fromAmino(object: _20.QueryParamsResponseAmino): _20.QueryParamsResponse;
                    toAmino(message: _20.QueryParamsResponse): _20.QueryParamsResponseAmino;
                    fromAminoMsg(object: _20.QueryParamsResponseAminoMsg): _20.QueryParamsResponse;
                    fromProtoMsg(message: _20.QueryParamsResponseProtoMsg): _20.QueryParamsResponse;
                    toProto(message: _20.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _20.QueryParamsResponse): _20.QueryParamsResponseProtoMsg;
                };
                QueryAnnualProvisionsRequest: {
                    typeUrl: string;
                    encode(_: _20.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _20.QueryAnnualProvisionsRequest;
                    fromPartial(_: Partial<_20.QueryAnnualProvisionsRequest>): _20.QueryAnnualProvisionsRequest;
                    fromAmino(_: _20.QueryAnnualProvisionsRequestAmino): _20.QueryAnnualProvisionsRequest;
                    toAmino(_: _20.QueryAnnualProvisionsRequest): _20.QueryAnnualProvisionsRequestAmino;
                    fromAminoMsg(object: _20.QueryAnnualProvisionsRequestAminoMsg): _20.QueryAnnualProvisionsRequest;
                    fromProtoMsg(message: _20.QueryAnnualProvisionsRequestProtoMsg): _20.QueryAnnualProvisionsRequest;
                    toProto(message: _20.QueryAnnualProvisionsRequest): Uint8Array;
                    toProtoMsg(message: _20.QueryAnnualProvisionsRequest): _20.QueryAnnualProvisionsRequestProtoMsg;
                };
                QueryAnnualProvisionsResponse: {
                    typeUrl: string;
                    encode(message: _20.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.QueryAnnualProvisionsResponse;
                    fromPartial(object: Partial<_20.QueryAnnualProvisionsResponse>): _20.QueryAnnualProvisionsResponse;
                    fromAmino(object: _20.QueryAnnualProvisionsResponseAmino): _20.QueryAnnualProvisionsResponse;
                    toAmino(message: _20.QueryAnnualProvisionsResponse): _20.QueryAnnualProvisionsResponseAmino;
                    fromAminoMsg(object: _20.QueryAnnualProvisionsResponseAminoMsg): _20.QueryAnnualProvisionsResponse;
                    fromProtoMsg(message: _20.QueryAnnualProvisionsResponseProtoMsg): _20.QueryAnnualProvisionsResponse;
                    toProto(message: _20.QueryAnnualProvisionsResponse): Uint8Array;
                    toProtoMsg(message: _20.QueryAnnualProvisionsResponse): _20.QueryAnnualProvisionsResponseProtoMsg;
                };
                Minter: {
                    typeUrl: string;
                    encode(message: _19.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Minter;
                    fromPartial(object: Partial<_19.Minter>): _19.Minter;
                    fromAmino(object: _19.MinterAmino): _19.Minter;
                    toAmino(message: _19.Minter): _19.MinterAmino;
                    fromAminoMsg(object: _19.MinterAminoMsg): _19.Minter;
                    fromProtoMsg(message: _19.MinterProtoMsg): _19.Minter;
                    toProto(message: _19.Minter): Uint8Array;
                    toProtoMsg(message: _19.Minter): _19.MinterProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _19.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Params;
                    fromPartial(object: Partial<_19.Params>): _19.Params;
                    fromAmino(object: _19.ParamsAmino): _19.Params;
                    toAmino(message: _19.Params): _19.ParamsAmino;
                    fromAminoMsg(object: _19.ParamsAminoMsg): _19.Params;
                    fromProtoMsg(message: _19.ParamsProtoMsg): _19.Params;
                    toProto(message: _19.Params): Uint8Array;
                    toProtoMsg(message: _19.Params): _19.ParamsProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GenesisState;
                    fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                    fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                    toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                    fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                    fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                    toProto(message: _18.GenesisState): Uint8Array;
                    toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
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
                        v1beta1: _193.MsgClientImpl;
                    };
                    cron: {
                        v1: _194.MsgClientImpl;
                    };
                    globalfee: {
                        v1: _195.MsgClientImpl;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: {
                            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        };
                    };
                    cron: {
                        v1: {
                            listPrivileged(request?: _11.QueryListPrivilegedRequest): Promise<_11.QueryListPrivilegedResponse>;
                            params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        };
                    };
                    globalfee: {
                        v1: {
                            codeAuthorization(request: _16.QueryCodeAuthorizationRequest): Promise<_16.QueryCodeAuthorizationResponse>;
                            contractAuthorization(request: _16.QueryContractAuthorizationRequest): Promise<_16.QueryContractAuthorizationResponse>;
                            params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                            authorizations(request?: _16.QueryAuthorizationsRequest): Promise<_16.QueryAuthorizationsResponse>;
                        };
                    };
                    mint: {
                        v1beta1: {
                            params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                            annualProvisions(request?: _20.QueryAnnualProvisionsRequest): Promise<_20.QueryAnnualProvisionsResponse>;
                        };
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
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
                        v1beta1: _185.LCDQueryClient;
                    };
                    cron: {
                        v1: _186.LCDQueryClient;
                    };
                    globalfee: {
                        v1: _187.LCDQueryClient;
                    };
                    mint: {
                        v1beta1: _188.LCDQueryClient;
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
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
