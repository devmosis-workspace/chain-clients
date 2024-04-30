import * as _0 from "../epochs/genesis";
import * as _1 from "../epochs/query";
import * as _2 from "../qoracle/genesis";
import * as _3 from "../qoracle/params";
import * as _4 from "../qoracle/pool";
import * as _5 from "../qoracle/query";
import * as _7 from "../qtransfer/genesis";
import * as _8 from "../qtransfer/params";
import * as _9 from "../qtransfer/query";
import * as _10 from "../qvesting/genesis";
import * as _11 from "../qvesting/params";
import * as _12 from "../qvesting/query";
import * as _13 from "../qvesting/tx";
import * as _14 from "../tokenfactory/v1beta1/authorityMetadata";
import * as _15 from "../tokenfactory/v1beta1/genesis";
import * as _16 from "../tokenfactory/v1beta1/params";
import * as _17 from "../tokenfactory/v1beta1/query";
import * as _18 from "../tokenfactory/v1beta1/tx";
import * as _167 from "../epochs/query.lcd";
import * as _168 from "../qoracle/osmosis/query.lcd";
import * as _169 from "../qoracle/query.lcd";
import * as _170 from "../qtransfer/query.lcd";
import * as _171 from "../qvesting/query.lcd";
import * as _172 from "../tokenfactory/v1beta1/query.lcd";
import * as _173 from "../epochs/query.rpc.Query";
import * as _174 from "../qoracle/osmosis/query.rpc.Query";
import * as _175 from "../qoracle/query.rpc.Query";
import * as _176 from "../qtransfer/query.rpc.Query";
import * as _177 from "../qvesting/query.rpc.Query";
import * as _178 from "../tokenfactory/v1beta1/query.rpc.Query";
import * as _179 from "../qvesting/tx.rpc.msg";
import * as _180 from "../tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace quasarlabs {
    namespace quasarnode {
        const epochs: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _1.QueryEpochsInfoRequest): Promise<_1.QueryEpochsInfoResponse>;
                currentEpoch(request: _1.QueryCurrentEpochRequest): Promise<_1.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _1.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_1.QueryEpochsInfoRequest>): _1.QueryEpochsInfoRequest;
                fromAmino(_: _1.QueryEpochsInfoRequestAmino): _1.QueryEpochsInfoRequest;
                toAmino(_: _1.QueryEpochsInfoRequest): _1.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _1.QueryEpochsInfoRequestAminoMsg): _1.QueryEpochsInfoRequest;
                fromProtoMsg(message: _1.QueryEpochsInfoRequestProtoMsg): _1.QueryEpochsInfoRequest;
                toProto(message: _1.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _1.QueryEpochsInfoRequest): _1.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _1.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_1.QueryEpochsInfoResponse>): _1.QueryEpochsInfoResponse;
                fromAmino(object: _1.QueryEpochsInfoResponseAmino): _1.QueryEpochsInfoResponse;
                toAmino(message: _1.QueryEpochsInfoResponse): _1.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _1.QueryEpochsInfoResponseAminoMsg): _1.QueryEpochsInfoResponse;
                fromProtoMsg(message: _1.QueryEpochsInfoResponseProtoMsg): _1.QueryEpochsInfoResponse;
                toProto(message: _1.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _1.QueryEpochsInfoResponse): _1.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _1.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_1.QueryCurrentEpochRequest>): _1.QueryCurrentEpochRequest;
                fromAmino(object: _1.QueryCurrentEpochRequestAmino): _1.QueryCurrentEpochRequest;
                toAmino(message: _1.QueryCurrentEpochRequest): _1.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _1.QueryCurrentEpochRequestAminoMsg): _1.QueryCurrentEpochRequest;
                fromProtoMsg(message: _1.QueryCurrentEpochRequestProtoMsg): _1.QueryCurrentEpochRequest;
                toProto(message: _1.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _1.QueryCurrentEpochRequest): _1.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _1.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_1.QueryCurrentEpochResponse>): _1.QueryCurrentEpochResponse;
                fromAmino(object: _1.QueryCurrentEpochResponseAmino): _1.QueryCurrentEpochResponse;
                toAmino(message: _1.QueryCurrentEpochResponse): _1.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _1.QueryCurrentEpochResponseAminoMsg): _1.QueryCurrentEpochResponse;
                fromProtoMsg(message: _1.QueryCurrentEpochResponseProtoMsg): _1.QueryCurrentEpochResponse;
                toProto(message: _1.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _1.QueryCurrentEpochResponse): _1.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _0.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EpochInfo;
                fromPartial(object: Partial<_0.EpochInfo>): _0.EpochInfo;
                fromAmino(object: _0.EpochInfoAmino): _0.EpochInfo;
                toAmino(message: _0.EpochInfo): _0.EpochInfoAmino;
                fromAminoMsg(object: _0.EpochInfoAminoMsg): _0.EpochInfo;
                fromProtoMsg(message: _0.EpochInfoProtoMsg): _0.EpochInfo;
                toProto(message: _0.EpochInfo): Uint8Array;
                toProtoMsg(message: _0.EpochInfo): _0.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
                fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
                toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
                fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
                fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
                toProto(message: _0.GenesisState): Uint8Array;
                toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
            };
        };
        const qoracle: {
            osmosis: {
                QueryClientImpl: typeof _174.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: import("../qoracle/osmosis/query").QueryParamsRequest): Promise<import("../qoracle/osmosis/query").QueryParamsResponse>;
                    state(request?: import("../qoracle/osmosis/query").QueryStateRequest): Promise<import("../qoracle/osmosis/query").QueryStateResponse>;
                    chainParams(request?: import("../qoracle/osmosis/query").QueryChainParamsRequest): Promise<import("../qoracle/osmosis/query").QueryChainParamsResponse>;
                    incentivizedPools(request?: import("../qoracle/osmosis/query").QueryIncentivizedPoolsRequest): Promise<import("../qoracle/osmosis/query").QueryIncentivizedPoolsResponse>;
                    pools(request?: import("../qoracle/osmosis/query").QueryPoolsRequest): Promise<import("../qoracle/osmosis/query").QueryPoolsResponse>;
                };
                LCDQueryClient: typeof _168.LCDQueryClient;
            };
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                pools(request: _5.QueryPoolsRequest): Promise<_5.QueryPoolsResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryParamsRequest;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryParamsResponse;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _5.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryPoolsRequest;
                fromPartial(object: Partial<_5.QueryPoolsRequest>): _5.QueryPoolsRequest;
                fromAmino(object: _5.QueryPoolsRequestAmino): _5.QueryPoolsRequest;
                toAmino(message: _5.QueryPoolsRequest): _5.QueryPoolsRequestAmino;
                fromAminoMsg(object: _5.QueryPoolsRequestAminoMsg): _5.QueryPoolsRequest;
                fromProtoMsg(message: _5.QueryPoolsRequestProtoMsg): _5.QueryPoolsRequest;
                toProto(message: _5.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryPoolsRequest): _5.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _5.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryPoolsResponse;
                fromPartial(object: Partial<_5.QueryPoolsResponse>): _5.QueryPoolsResponse;
                fromAmino(object: _5.QueryPoolsResponseAmino): _5.QueryPoolsResponse;
                toAmino(message: _5.QueryPoolsResponse): _5.QueryPoolsResponseAmino;
                fromAminoMsg(object: _5.QueryPoolsResponseAminoMsg): _5.QueryPoolsResponse;
                fromProtoMsg(message: _5.QueryPoolsResponseProtoMsg): _5.QueryPoolsResponse;
                toProto(message: _5.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryPoolsResponse): _5.QueryPoolsResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _4.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Pool;
                fromPartial(object: Partial<_4.Pool>): _4.Pool;
                fromAmino(object: _4.PoolAmino): _4.Pool;
                toAmino(message: _4.Pool): _4.PoolAmino;
                fromAminoMsg(object: _4.PoolAminoMsg): _4.Pool;
                fromProtoMsg(message: _4.PoolProtoMsg): _4.Pool;
                toProto(message: _4.Pool): Uint8Array;
                toProtoMsg(message: _4.Pool): _4.PoolProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.Params;
                fromPartial(_: Partial<_3.Params>): _3.Params;
                fromAmino(_: _3.ParamsAmino): _3.Params;
                toAmino(_: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            OsmosisGenesisState: {
                typeUrl: string;
                encode(message: _2.OsmosisGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.OsmosisGenesisState;
                fromPartial(object: Partial<_2.OsmosisGenesisState>): _2.OsmosisGenesisState;
                fromAmino(object: _2.OsmosisGenesisStateAmino): _2.OsmosisGenesisState;
                toAmino(message: _2.OsmosisGenesisState): _2.OsmosisGenesisStateAmino;
                fromAminoMsg(object: _2.OsmosisGenesisStateAminoMsg): _2.OsmosisGenesisState;
                fromProtoMsg(message: _2.OsmosisGenesisStateProtoMsg): _2.OsmosisGenesisState;
                toProto(message: _2.OsmosisGenesisState): Uint8Array;
                toProtoMsg(message: _2.OsmosisGenesisState): _2.OsmosisGenesisStateProtoMsg;
            };
        };
        const qtransfer: {
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryParamsRequest;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryParamsResponse;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
        };
        const qvesting: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                vestingAccounts(request?: _12.QueryVestingAccountsRequest): Promise<_12.QueryVestingAccountsResponse>;
                vestingLockedSupply(request: _12.QueryVestingLockedSupplyRequest): Promise<_12.QueryVestingLockedSupplyResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _13.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _13.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _13.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _13.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _13.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _13.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _13.MsgCreateVestingAccount) => _13.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _13.MsgCreateVestingAccountAmino) => _13.MsgCreateVestingAccount;
                };
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _13.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgCreateVestingAccount;
                fromPartial(object: Partial<_13.MsgCreateVestingAccount>): _13.MsgCreateVestingAccount;
                fromAmino(object: _13.MsgCreateVestingAccountAmino): _13.MsgCreateVestingAccount;
                toAmino(message: _13.MsgCreateVestingAccount): _13.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _13.MsgCreateVestingAccountAminoMsg): _13.MsgCreateVestingAccount;
                fromProtoMsg(message: _13.MsgCreateVestingAccountProtoMsg): _13.MsgCreateVestingAccount;
                toProto(message: _13.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _13.MsgCreateVestingAccount): _13.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _13.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_13.MsgCreateVestingAccountResponse>): _13.MsgCreateVestingAccountResponse;
                fromAmino(_: _13.MsgCreateVestingAccountResponseAmino): _13.MsgCreateVestingAccountResponse;
                toAmino(_: _13.MsgCreateVestingAccountResponse): _13.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _13.MsgCreateVestingAccountResponseAminoMsg): _13.MsgCreateVestingAccountResponse;
                fromProtoMsg(message: _13.MsgCreateVestingAccountResponseProtoMsg): _13.MsgCreateVestingAccountResponse;
                toProto(message: _13.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _13.MsgCreateVestingAccountResponse): _13.MsgCreateVestingAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _12.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
                fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
                toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
                fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
                fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
                toProto(message: _12.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _12.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_12.QuerySpendableBalancesRequest>): _12.QuerySpendableBalancesRequest;
                fromAmino(object: _12.QuerySpendableBalancesRequestAmino): _12.QuerySpendableBalancesRequest;
                toAmino(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _12.QuerySpendableBalancesRequestAminoMsg): _12.QuerySpendableBalancesRequest;
                fromProtoMsg(message: _12.QuerySpendableBalancesRequestProtoMsg): _12.QuerySpendableBalancesRequest;
                toProto(message: _12.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _12.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_12.QuerySpendableBalancesResponse>): _12.QuerySpendableBalancesResponse;
                fromAmino(object: _12.QuerySpendableBalancesResponseAmino): _12.QuerySpendableBalancesResponse;
                toAmino(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _12.QuerySpendableBalancesResponseAminoMsg): _12.QuerySpendableBalancesResponse;
                fromProtoMsg(message: _12.QuerySpendableBalancesResponseProtoMsg): _12.QuerySpendableBalancesResponse;
                toProto(message: _12.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryVestingAccountsRequest: {
                typeUrl: string;
                encode(message: _12.QueryVestingAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryVestingAccountsRequest;
                fromPartial(object: Partial<_12.QueryVestingAccountsRequest>): _12.QueryVestingAccountsRequest;
                fromAmino(object: _12.QueryVestingAccountsRequestAmino): _12.QueryVestingAccountsRequest;
                toAmino(message: _12.QueryVestingAccountsRequest): _12.QueryVestingAccountsRequestAmino;
                fromAminoMsg(object: _12.QueryVestingAccountsRequestAminoMsg): _12.QueryVestingAccountsRequest;
                fromProtoMsg(message: _12.QueryVestingAccountsRequestProtoMsg): _12.QueryVestingAccountsRequest;
                toProto(message: _12.QueryVestingAccountsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryVestingAccountsRequest): _12.QueryVestingAccountsRequestProtoMsg;
            };
            QueryVestingAccountsResponse: {
                typeUrl: string;
                encode(message: _12.QueryVestingAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryVestingAccountsResponse;
                fromPartial(object: Partial<_12.QueryVestingAccountsResponse>): _12.QueryVestingAccountsResponse;
                fromAmino(object: _12.QueryVestingAccountsResponseAmino): _12.QueryVestingAccountsResponse;
                toAmino(message: _12.QueryVestingAccountsResponse): _12.QueryVestingAccountsResponseAmino;
                fromAminoMsg(object: _12.QueryVestingAccountsResponseAminoMsg): _12.QueryVestingAccountsResponse;
                fromProtoMsg(message: _12.QueryVestingAccountsResponseProtoMsg): _12.QueryVestingAccountsResponse;
                toProto(message: _12.QueryVestingAccountsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryVestingAccountsResponse): _12.QueryVestingAccountsResponseProtoMsg;
            };
            QueryVestingLockedSupplyRequest: {
                typeUrl: string;
                encode(message: _12.QueryVestingLockedSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryVestingLockedSupplyRequest;
                fromPartial(object: Partial<_12.QueryVestingLockedSupplyRequest>): _12.QueryVestingLockedSupplyRequest;
                fromAmino(object: _12.QueryVestingLockedSupplyRequestAmino): _12.QueryVestingLockedSupplyRequest;
                toAmino(message: _12.QueryVestingLockedSupplyRequest): _12.QueryVestingLockedSupplyRequestAmino;
                fromAminoMsg(object: _12.QueryVestingLockedSupplyRequestAminoMsg): _12.QueryVestingLockedSupplyRequest;
                fromProtoMsg(message: _12.QueryVestingLockedSupplyRequestProtoMsg): _12.QueryVestingLockedSupplyRequest;
                toProto(message: _12.QueryVestingLockedSupplyRequest): Uint8Array;
                toProtoMsg(message: _12.QueryVestingLockedSupplyRequest): _12.QueryVestingLockedSupplyRequestProtoMsg;
            };
            QueryVestingLockedSupplyResponse: {
                typeUrl: string;
                encode(message: _12.QueryVestingLockedSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryVestingLockedSupplyResponse;
                fromPartial(object: Partial<_12.QueryVestingLockedSupplyResponse>): _12.QueryVestingLockedSupplyResponse;
                fromAmino(object: _12.QueryVestingLockedSupplyResponseAmino): _12.QueryVestingLockedSupplyResponse;
                toAmino(message: _12.QueryVestingLockedSupplyResponse): _12.QueryVestingLockedSupplyResponseAmino;
                fromAminoMsg(object: _12.QueryVestingLockedSupplyResponseAminoMsg): _12.QueryVestingLockedSupplyResponse;
                fromProtoMsg(message: _12.QueryVestingLockedSupplyResponseProtoMsg): _12.QueryVestingLockedSupplyResponse;
                toProto(message: _12.QueryVestingLockedSupplyResponse): Uint8Array;
                toProtoMsg(message: _12.QueryVestingLockedSupplyResponse): _12.QueryVestingLockedSupplyResponseProtoMsg;
            };
            VestingAccount_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            VestingAccount_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            VestingAccount_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(_: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.Params;
                fromPartial(_: Partial<_11.Params>): _11.Params;
                fromAmino(_: _11.ParamsAmino): _11.Params;
                toAmino(_: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
        };
        namespace tokenfactory {
            const v1beta1: {
                MsgClientImpl: typeof _180.MsgClientImpl;
                QueryClientImpl: typeof _178.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                    denomAuthorityMetadata(request: _17.QueryDenomAuthorityMetadataRequest): Promise<_17.QueryDenomAuthorityMetadataResponse>;
                    denomsFromCreator(request: _17.QueryDenomsFromCreatorRequest): Promise<_17.QueryDenomsFromCreatorResponse>;
                };
                LCDQueryClient: typeof _172.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createDenom(value: _18.MsgCreateDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        mint(value: _18.MsgMint): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        burn(value: _18.MsgBurn): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        changeAdmin(value: _18.MsgChangeAdmin): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        setDenomMetadata(value: _18.MsgSetDenomMetadata): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createDenom(value: _18.MsgCreateDenom): {
                            typeUrl: string;
                            value: _18.MsgCreateDenom;
                        };
                        mint(value: _18.MsgMint): {
                            typeUrl: string;
                            value: _18.MsgMint;
                        };
                        burn(value: _18.MsgBurn): {
                            typeUrl: string;
                            value: _18.MsgBurn;
                        };
                        changeAdmin(value: _18.MsgChangeAdmin): {
                            typeUrl: string;
                            value: _18.MsgChangeAdmin;
                        };
                        setDenomMetadata(value: _18.MsgSetDenomMetadata): {
                            typeUrl: string;
                            value: _18.MsgSetDenomMetadata;
                        };
                    };
                    fromJSON: {
                        createDenom(value: any): {
                            typeUrl: string;
                            value: _18.MsgCreateDenom;
                        };
                        mint(value: any): {
                            typeUrl: string;
                            value: _18.MsgMint;
                        };
                        burn(value: any): {
                            typeUrl: string;
                            value: _18.MsgBurn;
                        };
                        changeAdmin(value: any): {
                            typeUrl: string;
                            value: _18.MsgChangeAdmin;
                        };
                        setDenomMetadata(value: any): {
                            typeUrl: string;
                            value: _18.MsgSetDenomMetadata;
                        };
                    };
                    fromPartial: {
                        createDenom(value: _18.MsgCreateDenom): {
                            typeUrl: string;
                            value: _18.MsgCreateDenom;
                        };
                        mint(value: _18.MsgMint): {
                            typeUrl: string;
                            value: _18.MsgMint;
                        };
                        burn(value: _18.MsgBurn): {
                            typeUrl: string;
                            value: _18.MsgBurn;
                        };
                        changeAdmin(value: _18.MsgChangeAdmin): {
                            typeUrl: string;
                            value: _18.MsgChangeAdmin;
                        };
                        setDenomMetadata(value: _18.MsgSetDenomMetadata): {
                            typeUrl: string;
                            value: _18.MsgSetDenomMetadata;
                        };
                    };
                };
                AminoConverter: {
                    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgCreateDenom": {
                        aminoType: string;
                        toAmino: (message: _18.MsgCreateDenom) => _18.MsgCreateDenomAmino;
                        fromAmino: (object: _18.MsgCreateDenomAmino) => _18.MsgCreateDenom;
                    };
                    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgMint": {
                        aminoType: string;
                        toAmino: (message: _18.MsgMint) => _18.MsgMintAmino;
                        fromAmino: (object: _18.MsgMintAmino) => _18.MsgMint;
                    };
                    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgBurn": {
                        aminoType: string;
                        toAmino: (message: _18.MsgBurn) => _18.MsgBurnAmino;
                        fromAmino: (object: _18.MsgBurnAmino) => _18.MsgBurn;
                    };
                    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgChangeAdmin": {
                        aminoType: string;
                        toAmino: (message: _18.MsgChangeAdmin) => _18.MsgChangeAdminAmino;
                        fromAmino: (object: _18.MsgChangeAdminAmino) => _18.MsgChangeAdmin;
                    };
                    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                        aminoType: string;
                        toAmino: (message: _18.MsgSetDenomMetadata) => _18.MsgSetDenomMetadataAmino;
                        fromAmino: (object: _18.MsgSetDenomMetadataAmino) => _18.MsgSetDenomMetadata;
                    };
                };
                MsgCreateDenom: {
                    typeUrl: string;
                    encode(message: _18.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgCreateDenom;
                    fromPartial(object: Partial<_18.MsgCreateDenom>): _18.MsgCreateDenom;
                    fromAmino(object: _18.MsgCreateDenomAmino): _18.MsgCreateDenom;
                    toAmino(message: _18.MsgCreateDenom): _18.MsgCreateDenomAmino;
                    fromAminoMsg(object: _18.MsgCreateDenomAminoMsg): _18.MsgCreateDenom;
                    fromProtoMsg(message: _18.MsgCreateDenomProtoMsg): _18.MsgCreateDenom;
                    toProto(message: _18.MsgCreateDenom): Uint8Array;
                    toProtoMsg(message: _18.MsgCreateDenom): _18.MsgCreateDenomProtoMsg;
                };
                MsgCreateDenomResponse: {
                    typeUrl: string;
                    encode(message: _18.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgCreateDenomResponse;
                    fromPartial(object: Partial<_18.MsgCreateDenomResponse>): _18.MsgCreateDenomResponse;
                    fromAmino(object: _18.MsgCreateDenomResponseAmino): _18.MsgCreateDenomResponse;
                    toAmino(message: _18.MsgCreateDenomResponse): _18.MsgCreateDenomResponseAmino;
                    fromAminoMsg(object: _18.MsgCreateDenomResponseAminoMsg): _18.MsgCreateDenomResponse;
                    fromProtoMsg(message: _18.MsgCreateDenomResponseProtoMsg): _18.MsgCreateDenomResponse;
                    toProto(message: _18.MsgCreateDenomResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgCreateDenomResponse): _18.MsgCreateDenomResponseProtoMsg;
                };
                MsgMint: {
                    typeUrl: string;
                    encode(message: _18.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgMint;
                    fromPartial(object: Partial<_18.MsgMint>): _18.MsgMint;
                    fromAmino(object: _18.MsgMintAmino): _18.MsgMint;
                    toAmino(message: _18.MsgMint): _18.MsgMintAmino;
                    fromAminoMsg(object: _18.MsgMintAminoMsg): _18.MsgMint;
                    fromProtoMsg(message: _18.MsgMintProtoMsg): _18.MsgMint;
                    toProto(message: _18.MsgMint): Uint8Array;
                    toProtoMsg(message: _18.MsgMint): _18.MsgMintProtoMsg;
                };
                MsgMintResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgMintResponse;
                    fromPartial(_: Partial<_18.MsgMintResponse>): _18.MsgMintResponse;
                    fromAmino(_: _18.MsgMintResponseAmino): _18.MsgMintResponse;
                    toAmino(_: _18.MsgMintResponse): _18.MsgMintResponseAmino;
                    fromAminoMsg(object: _18.MsgMintResponseAminoMsg): _18.MsgMintResponse;
                    fromProtoMsg(message: _18.MsgMintResponseProtoMsg): _18.MsgMintResponse;
                    toProto(message: _18.MsgMintResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgMintResponse): _18.MsgMintResponseProtoMsg;
                };
                MsgBurn: {
                    typeUrl: string;
                    encode(message: _18.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgBurn;
                    fromPartial(object: Partial<_18.MsgBurn>): _18.MsgBurn;
                    fromAmino(object: _18.MsgBurnAmino): _18.MsgBurn;
                    toAmino(message: _18.MsgBurn): _18.MsgBurnAmino;
                    fromAminoMsg(object: _18.MsgBurnAminoMsg): _18.MsgBurn;
                    fromProtoMsg(message: _18.MsgBurnProtoMsg): _18.MsgBurn;
                    toProto(message: _18.MsgBurn): Uint8Array;
                    toProtoMsg(message: _18.MsgBurn): _18.MsgBurnProtoMsg;
                };
                MsgBurnResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgBurnResponse;
                    fromPartial(_: Partial<_18.MsgBurnResponse>): _18.MsgBurnResponse;
                    fromAmino(_: _18.MsgBurnResponseAmino): _18.MsgBurnResponse;
                    toAmino(_: _18.MsgBurnResponse): _18.MsgBurnResponseAmino;
                    fromAminoMsg(object: _18.MsgBurnResponseAminoMsg): _18.MsgBurnResponse;
                    fromProtoMsg(message: _18.MsgBurnResponseProtoMsg): _18.MsgBurnResponse;
                    toProto(message: _18.MsgBurnResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgBurnResponse): _18.MsgBurnResponseProtoMsg;
                };
                MsgChangeAdmin: {
                    typeUrl: string;
                    encode(message: _18.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgChangeAdmin;
                    fromPartial(object: Partial<_18.MsgChangeAdmin>): _18.MsgChangeAdmin;
                    fromAmino(object: _18.MsgChangeAdminAmino): _18.MsgChangeAdmin;
                    toAmino(message: _18.MsgChangeAdmin): _18.MsgChangeAdminAmino;
                    fromAminoMsg(object: _18.MsgChangeAdminAminoMsg): _18.MsgChangeAdmin;
                    fromProtoMsg(message: _18.MsgChangeAdminProtoMsg): _18.MsgChangeAdmin;
                    toProto(message: _18.MsgChangeAdmin): Uint8Array;
                    toProtoMsg(message: _18.MsgChangeAdmin): _18.MsgChangeAdminProtoMsg;
                };
                MsgChangeAdminResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgChangeAdminResponse;
                    fromPartial(_: Partial<_18.MsgChangeAdminResponse>): _18.MsgChangeAdminResponse;
                    fromAmino(_: _18.MsgChangeAdminResponseAmino): _18.MsgChangeAdminResponse;
                    toAmino(_: _18.MsgChangeAdminResponse): _18.MsgChangeAdminResponseAmino;
                    fromAminoMsg(object: _18.MsgChangeAdminResponseAminoMsg): _18.MsgChangeAdminResponse;
                    fromProtoMsg(message: _18.MsgChangeAdminResponseProtoMsg): _18.MsgChangeAdminResponse;
                    toProto(message: _18.MsgChangeAdminResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgChangeAdminResponse): _18.MsgChangeAdminResponseProtoMsg;
                };
                MsgSetDenomMetadata: {
                    typeUrl: string;
                    encode(message: _18.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgSetDenomMetadata;
                    fromPartial(object: Partial<_18.MsgSetDenomMetadata>): _18.MsgSetDenomMetadata;
                    fromAmino(object: _18.MsgSetDenomMetadataAmino): _18.MsgSetDenomMetadata;
                    toAmino(message: _18.MsgSetDenomMetadata): _18.MsgSetDenomMetadataAmino;
                    fromAminoMsg(object: _18.MsgSetDenomMetadataAminoMsg): _18.MsgSetDenomMetadata;
                    fromProtoMsg(message: _18.MsgSetDenomMetadataProtoMsg): _18.MsgSetDenomMetadata;
                    toProto(message: _18.MsgSetDenomMetadata): Uint8Array;
                    toProtoMsg(message: _18.MsgSetDenomMetadata): _18.MsgSetDenomMetadataProtoMsg;
                };
                MsgSetDenomMetadataResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgSetDenomMetadataResponse;
                    fromPartial(_: Partial<_18.MsgSetDenomMetadataResponse>): _18.MsgSetDenomMetadataResponse;
                    fromAmino(_: _18.MsgSetDenomMetadataResponseAmino): _18.MsgSetDenomMetadataResponse;
                    toAmino(_: _18.MsgSetDenomMetadataResponse): _18.MsgSetDenomMetadataResponseAmino;
                    fromAminoMsg(object: _18.MsgSetDenomMetadataResponseAminoMsg): _18.MsgSetDenomMetadataResponse;
                    fromProtoMsg(message: _18.MsgSetDenomMetadataResponseProtoMsg): _18.MsgSetDenomMetadataResponse;
                    toProto(message: _18.MsgSetDenomMetadataResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgSetDenomMetadataResponse): _18.MsgSetDenomMetadataResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.QueryParamsRequest;
                    fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                    fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                    toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                    fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                    fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                    toProto(message: _17.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryParamsResponse;
                    fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                    fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                    toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                    fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                    fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                    toProto(message: _17.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
                };
                QueryDenomAuthorityMetadataRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDenomAuthorityMetadataRequest;
                    fromPartial(object: Partial<_17.QueryDenomAuthorityMetadataRequest>): _17.QueryDenomAuthorityMetadataRequest;
                    fromAmino(object: _17.QueryDenomAuthorityMetadataRequestAmino): _17.QueryDenomAuthorityMetadataRequest;
                    toAmino(message: _17.QueryDenomAuthorityMetadataRequest): _17.QueryDenomAuthorityMetadataRequestAmino;
                    fromAminoMsg(object: _17.QueryDenomAuthorityMetadataRequestAminoMsg): _17.QueryDenomAuthorityMetadataRequest;
                    fromProtoMsg(message: _17.QueryDenomAuthorityMetadataRequestProtoMsg): _17.QueryDenomAuthorityMetadataRequest;
                    toProto(message: _17.QueryDenomAuthorityMetadataRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryDenomAuthorityMetadataRequest): _17.QueryDenomAuthorityMetadataRequestProtoMsg;
                };
                QueryDenomAuthorityMetadataResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDenomAuthorityMetadataResponse;
                    fromPartial(object: Partial<_17.QueryDenomAuthorityMetadataResponse>): _17.QueryDenomAuthorityMetadataResponse;
                    fromAmino(object: _17.QueryDenomAuthorityMetadataResponseAmino): _17.QueryDenomAuthorityMetadataResponse;
                    toAmino(message: _17.QueryDenomAuthorityMetadataResponse): _17.QueryDenomAuthorityMetadataResponseAmino;
                    fromAminoMsg(object: _17.QueryDenomAuthorityMetadataResponseAminoMsg): _17.QueryDenomAuthorityMetadataResponse;
                    fromProtoMsg(message: _17.QueryDenomAuthorityMetadataResponseProtoMsg): _17.QueryDenomAuthorityMetadataResponse;
                    toProto(message: _17.QueryDenomAuthorityMetadataResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryDenomAuthorityMetadataResponse): _17.QueryDenomAuthorityMetadataResponseProtoMsg;
                };
                QueryDenomsFromCreatorRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDenomsFromCreatorRequest;
                    fromPartial(object: Partial<_17.QueryDenomsFromCreatorRequest>): _17.QueryDenomsFromCreatorRequest;
                    fromAmino(object: _17.QueryDenomsFromCreatorRequestAmino): _17.QueryDenomsFromCreatorRequest;
                    toAmino(message: _17.QueryDenomsFromCreatorRequest): _17.QueryDenomsFromCreatorRequestAmino;
                    fromAminoMsg(object: _17.QueryDenomsFromCreatorRequestAminoMsg): _17.QueryDenomsFromCreatorRequest;
                    fromProtoMsg(message: _17.QueryDenomsFromCreatorRequestProtoMsg): _17.QueryDenomsFromCreatorRequest;
                    toProto(message: _17.QueryDenomsFromCreatorRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryDenomsFromCreatorRequest): _17.QueryDenomsFromCreatorRequestProtoMsg;
                };
                QueryDenomsFromCreatorResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDenomsFromCreatorResponse;
                    fromPartial(object: Partial<_17.QueryDenomsFromCreatorResponse>): _17.QueryDenomsFromCreatorResponse;
                    fromAmino(object: _17.QueryDenomsFromCreatorResponseAmino): _17.QueryDenomsFromCreatorResponse;
                    toAmino(message: _17.QueryDenomsFromCreatorResponse): _17.QueryDenomsFromCreatorResponseAmino;
                    fromAminoMsg(object: _17.QueryDenomsFromCreatorResponseAminoMsg): _17.QueryDenomsFromCreatorResponse;
                    fromProtoMsg(message: _17.QueryDenomsFromCreatorResponseProtoMsg): _17.QueryDenomsFromCreatorResponse;
                    toProto(message: _17.QueryDenomsFromCreatorResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryDenomsFromCreatorResponse): _17.QueryDenomsFromCreatorResponseProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.Params;
                    fromPartial(object: Partial<_16.Params>): _16.Params;
                    fromAmino(object: _16.ParamsAmino): _16.Params;
                    toAmino(message: _16.Params): _16.ParamsAmino;
                    fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
                    fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
                    toProto(message: _16.Params): Uint8Array;
                    toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.GenesisState;
                    fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                    fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                    toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                    fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                    fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                    toProto(message: _15.GenesisState): Uint8Array;
                    toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
                };
                GenesisDenom: {
                    typeUrl: string;
                    encode(message: _15.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.GenesisDenom;
                    fromPartial(object: Partial<_15.GenesisDenom>): _15.GenesisDenom;
                    fromAmino(object: _15.GenesisDenomAmino): _15.GenesisDenom;
                    toAmino(message: _15.GenesisDenom): _15.GenesisDenomAmino;
                    fromAminoMsg(object: _15.GenesisDenomAminoMsg): _15.GenesisDenom;
                    fromProtoMsg(message: _15.GenesisDenomProtoMsg): _15.GenesisDenom;
                    toProto(message: _15.GenesisDenom): Uint8Array;
                    toProtoMsg(message: _15.GenesisDenom): _15.GenesisDenomProtoMsg;
                };
                DenomAuthorityMetadata: {
                    typeUrl: string;
                    encode(message: _14.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.DenomAuthorityMetadata;
                    fromPartial(object: Partial<_14.DenomAuthorityMetadata>): _14.DenomAuthorityMetadata;
                    fromAmino(object: _14.DenomAuthorityMetadataAmino): _14.DenomAuthorityMetadata;
                    toAmino(message: _14.DenomAuthorityMetadata): _14.DenomAuthorityMetadataAmino;
                    fromAminoMsg(object: _14.DenomAuthorityMetadataAminoMsg): _14.DenomAuthorityMetadata;
                    fromProtoMsg(message: _14.DenomAuthorityMetadataProtoMsg): _14.DenomAuthorityMetadata;
                    toProto(message: _14.DenomAuthorityMetadata): Uint8Array;
                    toProtoMsg(message: _14.DenomAuthorityMetadata): _14.DenomAuthorityMetadataProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            quasarlabs: {
                quasarnode: {
                    qvesting: _179.MsgClientImpl;
                    tokenfactory: {
                        v1beta1: _180.MsgClientImpl;
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
            quasarlabs: {
                quasarnode: {
                    epochs: {
                        epochInfos(request?: _1.QueryEpochsInfoRequest): Promise<_1.QueryEpochsInfoResponse>;
                        currentEpoch(request: _1.QueryCurrentEpochRequest): Promise<_1.QueryCurrentEpochResponse>;
                    };
                    qoracle: {
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        pools(request: _5.QueryPoolsRequest): Promise<_5.QueryPoolsResponse>;
                    };
                    qtransfer: {
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                    };
                    qvesting: {
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                        vestingAccounts(request?: _12.QueryVestingAccountsRequest): Promise<_12.QueryVestingAccountsResponse>;
                        vestingLockedSupply(request: _12.QueryVestingLockedSupplyRequest): Promise<_12.QueryVestingLockedSupplyResponse>;
                    };
                    tokenfactory: {
                        v1beta1: {
                            params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                            denomAuthorityMetadata(request: _17.QueryDenomAuthorityMetadataRequest): Promise<_17.QueryDenomAuthorityMetadataResponse>;
                            denomsFromCreator(request: _17.QueryDenomsFromCreatorRequest): Promise<_17.QueryDenomsFromCreatorResponse>;
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
            quasarlabs: {
                quasarnode: {
                    epochs: _167.LCDQueryClient;
                    qoracle: _169.LCDQueryClient;
                    qtransfer: _170.LCDQueryClient;
                    qvesting: _171.LCDQueryClient;
                    tokenfactory: {
                        v1beta1: _172.LCDQueryClient;
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
