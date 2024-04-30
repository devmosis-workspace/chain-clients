import * as _0 from "../globalfee/genesis";
import * as _1 from "../globalfee/query";
import * as _2 from "./forwarding/v1/account";
import * as _3 from "./forwarding/v1/genesis";
import * as _4 from "./forwarding/v1/packet";
import * as _5 from "./forwarding/v1/query";
import * as _6 from "./forwarding/v1/tx";
import * as _7 from "../tariff/genesis";
import * as _8 from "../tariff/params";
import * as _9 from "../tariff/query";
import * as _10 from "../tokenfactory/blacklisted";
import * as _11 from "../tokenfactory/blacklister";
import * as _12 from "../tokenfactory/genesis";
import * as _13 from "../tokenfactory/master_minter";
import * as _14 from "../tokenfactory/minter_controller";
import * as _15 from "../tokenfactory/minters";
import * as _16 from "../tokenfactory/minting_denom";
import * as _17 from "../tokenfactory/owner";
import * as _18 from "../tokenfactory/params";
import * as _19 from "../tokenfactory/paused";
import * as _20 from "../tokenfactory/pauser";
import * as _21 from "../tokenfactory/query";
import * as _22 from "../tokenfactory/tx";
import * as _129 from "../globalfee/query.lcd";
import * as _130 from "./forwarding/v1/query.lcd";
import * as _131 from "../tariff/query.lcd";
import * as _132 from "../tokenfactory/query.lcd";
import * as _133 from "../globalfee/query.rpc.Query";
import * as _134 from "./forwarding/v1/query.rpc.Query";
import * as _135 from "../tariff/query.rpc.Query";
import * as _136 from "../tokenfactory/query.rpc.Query";
import * as _137 from "./forwarding/v1/tx.rpc.msg";
import * as _138 from "../tokenfactory/tx.rpc.msg";
export declare namespace noble {
    const globalfee: {
        QueryClientImpl: typeof _133.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _1.QueryParamsRequest): Promise<_1.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _129.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _1.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _1.QueryParamsRequest;
            fromPartial(_: Partial<_1.QueryParamsRequest>): _1.QueryParamsRequest;
            fromAmino(_: _1.QueryParamsRequestAmino): _1.QueryParamsRequest;
            toAmino(_: _1.QueryParamsRequest): _1.QueryParamsRequestAmino;
            fromAminoMsg(object: _1.QueryParamsRequestAminoMsg): _1.QueryParamsRequest;
            fromProtoMsg(message: _1.QueryParamsRequestProtoMsg): _1.QueryParamsRequest;
            toProto(message: _1.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _1.QueryParamsRequest): _1.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _1.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.QueryParamsResponse;
            fromPartial(object: Partial<_1.QueryParamsResponse>): _1.QueryParamsResponse;
            fromAmino(object: _1.QueryParamsResponseAmino): _1.QueryParamsResponse;
            toAmino(message: _1.QueryParamsResponse): _1.QueryParamsResponseAmino;
            fromAminoMsg(object: _1.QueryParamsResponseAminoMsg): _1.QueryParamsResponse;
            fromProtoMsg(message: _1.QueryParamsResponseProtoMsg): _1.QueryParamsResponse;
            toProto(message: _1.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _1.QueryParamsResponse): _1.QueryParamsResponseProtoMsg;
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
        Params: {
            typeUrl: string;
            encode(message: _0.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.Params;
            fromPartial(object: Partial<_0.Params>): _0.Params;
            fromAmino(object: _0.ParamsAmino): _0.Params;
            toAmino(message: _0.Params): _0.ParamsAmino;
            fromAminoMsg(object: _0.ParamsAminoMsg): _0.Params;
            fromProtoMsg(message: _0.ParamsProtoMsg): _0.Params;
            toProto(message: _0.Params): Uint8Array;
            toProtoMsg(message: _0.Params): _0.ParamsProtoMsg;
        };
    };
    namespace forwarding {
        const v1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                address(request: _5.QueryAddress): Promise<_5.QueryAddressResponse>;
                statsByChannel(request: _5.QueryStatsByChannel): Promise<_5.QueryStatsByChannelResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: noble.forwarding.v1.MsgRegisterAccount): {
                        typeUrl: string;
                        value: any;
                    };
                    clearAccount(value: noble.forwarding.v1.MsgClearAccount): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: noble.forwarding.v1.MsgRegisterAccount): {
                        typeUrl: string;
                        value: noble.forwarding.v1.MsgRegisterAccount;
                    };
                    clearAccount(value: noble.forwarding.v1.MsgClearAccount): {
                        typeUrl: string;
                        value: noble.forwarding.v1.MsgClearAccount;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                    clearAccount(value: any): {
                        typeUrl: string;
                        value: any;
                    };
                };
                fromPartial: {
                    registerAccount(value: noble.forwarding.v1.MsgRegisterAccount): {
                        typeUrl: string;
                        value: any;
                    };
                    clearAccount(value: noble.forwarding.v1.MsgClearAccount): {
                        typeUrl: string;
                        value: any;
                    };
                };
            };
            AminoConverter: {
                "/noble.forwarding.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _6.MsgRegisterAccount) => _6.MsgRegisterAccountAmino;
                    fromAmino: (object: _6.MsgRegisterAccountAmino) => _6.MsgRegisterAccount;
                };
                "/noble.forwarding.v1.MsgClearAccount": {
                    aminoType: string;
                    toAmino: (message: _6.MsgClearAccount) => _6.MsgClearAccountAmino;
                    fromAmino: (object: _6.MsgClearAccountAmino) => _6.MsgClearAccount;
                };
            };
            MsgRegisterAccount: {
                typeUrl: string;
                encode(message: _6.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgRegisterAccount;
                fromPartial(object: Partial<_6.MsgRegisterAccount>): _6.MsgRegisterAccount;
                fromAmino(object: _6.MsgRegisterAccountAmino): _6.MsgRegisterAccount;
                toAmino(message: _6.MsgRegisterAccount): _6.MsgRegisterAccountAmino;
                fromAminoMsg(object: _6.MsgRegisterAccountAminoMsg): _6.MsgRegisterAccount;
                fromProtoMsg(message: _6.MsgRegisterAccountProtoMsg): _6.MsgRegisterAccount;
                toProto(message: _6.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _6.MsgRegisterAccount): _6.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                typeUrl: string;
                encode(message: _6.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgRegisterAccountResponse;
                fromPartial(object: Partial<_6.MsgRegisterAccountResponse>): _6.MsgRegisterAccountResponse;
                fromAmino(object: _6.MsgRegisterAccountResponseAmino): _6.MsgRegisterAccountResponse;
                toAmino(message: _6.MsgRegisterAccountResponse): _6.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _6.MsgRegisterAccountResponseAminoMsg): _6.MsgRegisterAccountResponse;
                fromProtoMsg(message: _6.MsgRegisterAccountResponseProtoMsg): _6.MsgRegisterAccountResponse;
                toProto(message: _6.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _6.MsgRegisterAccountResponse): _6.MsgRegisterAccountResponseProtoMsg;
            };
            MsgClearAccount: {
                typeUrl: string;
                encode(message: _6.MsgClearAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgClearAccount;
                fromPartial(object: Partial<_6.MsgClearAccount>): _6.MsgClearAccount;
                fromAmino(object: _6.MsgClearAccountAmino): _6.MsgClearAccount;
                toAmino(message: _6.MsgClearAccount): _6.MsgClearAccountAmino;
                fromAminoMsg(object: _6.MsgClearAccountAminoMsg): _6.MsgClearAccount;
                fromProtoMsg(message: _6.MsgClearAccountProtoMsg): _6.MsgClearAccount;
                toProto(message: _6.MsgClearAccount): Uint8Array;
                toProtoMsg(message: _6.MsgClearAccount): _6.MsgClearAccountProtoMsg;
            };
            MsgClearAccountResponse: {
                typeUrl: string;
                encode(_: _6.MsgClearAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgClearAccountResponse;
                fromPartial(_: Partial<_6.MsgClearAccountResponse>): _6.MsgClearAccountResponse;
                fromAmino(_: _6.MsgClearAccountResponseAmino): _6.MsgClearAccountResponse;
                toAmino(_: _6.MsgClearAccountResponse): _6.MsgClearAccountResponseAmino;
                fromAminoMsg(object: _6.MsgClearAccountResponseAminoMsg): _6.MsgClearAccountResponse;
                fromProtoMsg(message: _6.MsgClearAccountResponseProtoMsg): _6.MsgClearAccountResponse;
                toProto(message: _6.MsgClearAccountResponse): Uint8Array;
                toProtoMsg(message: _6.MsgClearAccountResponse): _6.MsgClearAccountResponseProtoMsg;
            };
            QueryAddress: {
                typeUrl: string;
                encode(message: _5.QueryAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryAddress;
                fromPartial(object: Partial<_5.QueryAddress>): _5.QueryAddress;
                fromAmino(object: _5.QueryAddressAmino): _5.QueryAddress;
                toAmino(message: _5.QueryAddress): _5.QueryAddressAmino;
                fromAminoMsg(object: _5.QueryAddressAminoMsg): _5.QueryAddress;
                fromProtoMsg(message: _5.QueryAddressProtoMsg): _5.QueryAddress;
                toProto(message: _5.QueryAddress): Uint8Array;
                toProtoMsg(message: _5.QueryAddress): _5.QueryAddressProtoMsg;
            };
            QueryAddressResponse: {
                typeUrl: string;
                encode(message: _5.QueryAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryAddressResponse;
                fromPartial(object: Partial<_5.QueryAddressResponse>): _5.QueryAddressResponse;
                fromAmino(object: _5.QueryAddressResponseAmino): _5.QueryAddressResponse;
                toAmino(message: _5.QueryAddressResponse): _5.QueryAddressResponseAmino;
                fromAminoMsg(object: _5.QueryAddressResponseAminoMsg): _5.QueryAddressResponse;
                fromProtoMsg(message: _5.QueryAddressResponseProtoMsg): _5.QueryAddressResponse;
                toProto(message: _5.QueryAddressResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAddressResponse): _5.QueryAddressResponseProtoMsg;
            };
            QueryStatsByChannel: {
                typeUrl: string;
                encode(message: _5.QueryStatsByChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryStatsByChannel;
                fromPartial(object: Partial<_5.QueryStatsByChannel>): _5.QueryStatsByChannel;
                fromAmino(object: _5.QueryStatsByChannelAmino): _5.QueryStatsByChannel;
                toAmino(message: _5.QueryStatsByChannel): _5.QueryStatsByChannelAmino;
                fromAminoMsg(object: _5.QueryStatsByChannelAminoMsg): _5.QueryStatsByChannel;
                fromProtoMsg(message: _5.QueryStatsByChannelProtoMsg): _5.QueryStatsByChannel;
                toProto(message: _5.QueryStatsByChannel): Uint8Array;
                toProtoMsg(message: _5.QueryStatsByChannel): _5.QueryStatsByChannelProtoMsg;
            };
            QueryStatsByChannelResponse: {
                typeUrl: string;
                encode(message: _5.QueryStatsByChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryStatsByChannelResponse;
                fromPartial(object: Partial<_5.QueryStatsByChannelResponse>): _5.QueryStatsByChannelResponse;
                fromAmino(object: _5.QueryStatsByChannelResponseAmino): _5.QueryStatsByChannelResponse;
                toAmino(message: _5.QueryStatsByChannelResponse): _5.QueryStatsByChannelResponseAmino;
                fromAminoMsg(object: _5.QueryStatsByChannelResponseAminoMsg): _5.QueryStatsByChannelResponse;
                fromProtoMsg(message: _5.QueryStatsByChannelResponseProtoMsg): _5.QueryStatsByChannelResponse;
                toProto(message: _5.QueryStatsByChannelResponse): Uint8Array;
                toProtoMsg(message: _5.QueryStatsByChannelResponse): _5.QueryStatsByChannelResponseProtoMsg;
            };
            RegisterAccountData: {
                typeUrl: string;
                encode(message: _4.RegisterAccountData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RegisterAccountData;
                fromPartial(object: Partial<_4.RegisterAccountData>): _4.RegisterAccountData;
                fromAmino(object: _4.RegisterAccountDataAmino): _4.RegisterAccountData;
                toAmino(message: _4.RegisterAccountData): _4.RegisterAccountDataAmino;
                fromAminoMsg(object: _4.RegisterAccountDataAminoMsg): _4.RegisterAccountData;
                fromProtoMsg(message: _4.RegisterAccountDataProtoMsg): _4.RegisterAccountData;
                toProto(message: _4.RegisterAccountData): Uint8Array;
                toProtoMsg(message: _4.RegisterAccountData): _4.RegisterAccountDataProtoMsg;
            };
            RegisterAccountMemo: {
                typeUrl: string;
                encode(message: _4.RegisterAccountMemo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RegisterAccountMemo;
                fromPartial(object: Partial<_4.RegisterAccountMemo>): _4.RegisterAccountMemo;
                fromAmino(object: _4.RegisterAccountMemoAmino): _4.RegisterAccountMemo;
                toAmino(message: _4.RegisterAccountMemo): _4.RegisterAccountMemoAmino;
                fromAminoMsg(object: _4.RegisterAccountMemoAminoMsg): _4.RegisterAccountMemo;
                fromProtoMsg(message: _4.RegisterAccountMemoProtoMsg): _4.RegisterAccountMemo;
                toProto(message: _4.RegisterAccountMemo): Uint8Array;
                toProtoMsg(message: _4.RegisterAccountMemo): _4.RegisterAccountMemoProtoMsg;
            };
            RegisterAccountMemo_RegisterAccountDataWrapper: {
                typeUrl: string;
                encode(message: _4.RegisterAccountMemo_RegisterAccountDataWrapper, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.RegisterAccountMemo_RegisterAccountDataWrapper;
                fromPartial(object: Partial<_4.RegisterAccountMemo_RegisterAccountDataWrapper>): _4.RegisterAccountMemo_RegisterAccountDataWrapper;
                fromAmino(object: _4.RegisterAccountMemo_RegisterAccountDataWrapperAmino): _4.RegisterAccountMemo_RegisterAccountDataWrapper;
                toAmino(message: _4.RegisterAccountMemo_RegisterAccountDataWrapper): _4.RegisterAccountMemo_RegisterAccountDataWrapperAmino;
                fromAminoMsg(object: _4.RegisterAccountMemo_RegisterAccountDataWrapperAminoMsg): _4.RegisterAccountMemo_RegisterAccountDataWrapper;
                fromProtoMsg(message: _4.RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg): _4.RegisterAccountMemo_RegisterAccountDataWrapper;
                toProto(message: _4.RegisterAccountMemo_RegisterAccountDataWrapper): Uint8Array;
                toProtoMsg(message: _4.RegisterAccountMemo_RegisterAccountDataWrapper): _4.RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg;
            };
            GenesisState_NumOfAccountsEntry: {
                encode(message: _3.GenesisState_NumOfAccountsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState_NumOfAccountsEntry;
                fromPartial(object: Partial<_3.GenesisState_NumOfAccountsEntry>): _3.GenesisState_NumOfAccountsEntry;
                fromAmino(object: _3.GenesisState_NumOfAccountsEntryAmino): _3.GenesisState_NumOfAccountsEntry;
                toAmino(message: _3.GenesisState_NumOfAccountsEntry): _3.GenesisState_NumOfAccountsEntryAmino;
                fromAminoMsg(object: _3.GenesisState_NumOfAccountsEntryAminoMsg): _3.GenesisState_NumOfAccountsEntry;
                fromProtoMsg(message: _3.GenesisState_NumOfAccountsEntryProtoMsg): _3.GenesisState_NumOfAccountsEntry;
                toProto(message: _3.GenesisState_NumOfAccountsEntry): Uint8Array;
            };
            GenesisState_NumOfForwardsEntry: {
                encode(message: _3.GenesisState_NumOfForwardsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState_NumOfForwardsEntry;
                fromPartial(object: Partial<_3.GenesisState_NumOfForwardsEntry>): _3.GenesisState_NumOfForwardsEntry;
                fromAmino(object: _3.GenesisState_NumOfForwardsEntryAmino): _3.GenesisState_NumOfForwardsEntry;
                toAmino(message: _3.GenesisState_NumOfForwardsEntry): _3.GenesisState_NumOfForwardsEntryAmino;
                fromAminoMsg(object: _3.GenesisState_NumOfForwardsEntryAminoMsg): _3.GenesisState_NumOfForwardsEntry;
                fromProtoMsg(message: _3.GenesisState_NumOfForwardsEntryProtoMsg): _3.GenesisState_NumOfForwardsEntry;
                toProto(message: _3.GenesisState_NumOfForwardsEntry): Uint8Array;
            };
            GenesisState_TotalForwardedEntry: {
                encode(message: _3.GenesisState_TotalForwardedEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState_TotalForwardedEntry;
                fromPartial(object: Partial<_3.GenesisState_TotalForwardedEntry>): _3.GenesisState_TotalForwardedEntry;
                fromAmino(object: _3.GenesisState_TotalForwardedEntryAmino): _3.GenesisState_TotalForwardedEntry;
                toAmino(message: _3.GenesisState_TotalForwardedEntry): _3.GenesisState_TotalForwardedEntryAmino;
                fromAminoMsg(object: _3.GenesisState_TotalForwardedEntryAminoMsg): _3.GenesisState_TotalForwardedEntry;
                fromProtoMsg(message: _3.GenesisState_TotalForwardedEntryProtoMsg): _3.GenesisState_TotalForwardedEntry;
                toProto(message: _3.GenesisState_TotalForwardedEntry): Uint8Array;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            ForwardingAccount: {
                typeUrl: string;
                encode(message: _2.ForwardingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ForwardingAccount;
                fromPartial(object: Partial<_2.ForwardingAccount>): _2.ForwardingAccount;
                fromAmino(object: _2.ForwardingAccountAmino): _2.ForwardingAccount;
                toAmino(message: _2.ForwardingAccount): _2.ForwardingAccountAmino;
                fromAminoMsg(object: _2.ForwardingAccountAminoMsg): _2.ForwardingAccount;
                fromProtoMsg(message: _2.ForwardingAccountProtoMsg): _2.ForwardingAccount;
                toProto(message: _2.ForwardingAccount): Uint8Array;
                toProtoMsg(message: _2.ForwardingAccount): _2.ForwardingAccountProtoMsg;
            };
        };
    }
    const tariff: {
        QueryClientImpl: typeof _135.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _131.LCDQueryClient;
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
        DistributionEntity: {
            typeUrl: string;
            encode(message: _8.DistributionEntity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.DistributionEntity;
            fromPartial(object: Partial<_8.DistributionEntity>): _8.DistributionEntity;
            fromAmino(object: _8.DistributionEntityAmino): _8.DistributionEntity;
            toAmino(message: _8.DistributionEntity): _8.DistributionEntityAmino;
            fromAminoMsg(object: _8.DistributionEntityAminoMsg): _8.DistributionEntity;
            fromProtoMsg(message: _8.DistributionEntityProtoMsg): _8.DistributionEntity;
            toProto(message: _8.DistributionEntity): Uint8Array;
            toProtoMsg(message: _8.DistributionEntity): _8.DistributionEntityProtoMsg;
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
    const tokenfactory: {
        MsgClientImpl: typeof _138.MsgClientImpl;
        QueryClientImpl: typeof _136.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
            blacklisted(request: _21.QueryGetBlacklistedRequest): Promise<_21.QueryGetBlacklistedResponse>;
            blacklistedAll(request?: _21.QueryAllBlacklistedRequest): Promise<_21.QueryAllBlacklistedResponse>;
            paused(request?: _21.QueryGetPausedRequest): Promise<_21.QueryGetPausedResponse>;
            masterMinter(request?: _21.QueryGetMasterMinterRequest): Promise<_21.QueryGetMasterMinterResponse>;
            minters(request: _21.QueryGetMintersRequest): Promise<_21.QueryGetMintersResponse>;
            mintersAll(request?: _21.QueryAllMintersRequest): Promise<_21.QueryAllMintersResponse>;
            pauser(request?: _21.QueryGetPauserRequest): Promise<_21.QueryGetPauserResponse>;
            blacklister(request?: _21.QueryGetBlacklisterRequest): Promise<_21.QueryGetBlacklisterResponse>;
            owner(request?: _21.QueryGetOwnerRequest): Promise<_21.QueryGetOwnerResponse>;
            minterController(request: _21.QueryGetMinterControllerRequest): Promise<_21.QueryGetMinterControllerResponse>;
            minterControllerAll(request?: _21.QueryAllMinterControllerRequest): Promise<_21.QueryAllMinterControllerResponse>;
            mintingDenom(request?: _21.QueryGetMintingDenomRequest): Promise<_21.QueryGetMintingDenomResponse>;
        };
        LCDQueryClient: typeof _132.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateMasterMinter(value: _22.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updatePauser(value: _22.MsgUpdatePauser): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateBlacklister(value: _22.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateOwner(value: _22.MsgUpdateOwner): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                acceptOwner(value: _22.MsgAcceptOwner): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                configureMinter(value: _22.MsgConfigureMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeMinter(value: _22.MsgRemoveMinter): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                mint(value: _22.MsgMint): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burn(value: _22.MsgBurn): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                blacklist(value: _22.MsgBlacklist): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unblacklist(value: _22.MsgUnblacklist): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                pause(value: _22.MsgPause): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unpause(value: _22.MsgUnpause): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                configureMinterController(value: _22.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeMinterController(value: _22.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateMasterMinter(value: _22.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: _22.MsgUpdateMasterMinter;
                };
                updatePauser(value: _22.MsgUpdatePauser): {
                    typeUrl: string;
                    value: _22.MsgUpdatePauser;
                };
                updateBlacklister(value: _22.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: _22.MsgUpdateBlacklister;
                };
                updateOwner(value: _22.MsgUpdateOwner): {
                    typeUrl: string;
                    value: _22.MsgUpdateOwner;
                };
                acceptOwner(value: _22.MsgAcceptOwner): {
                    typeUrl: string;
                    value: _22.MsgAcceptOwner;
                };
                configureMinter(value: _22.MsgConfigureMinter): {
                    typeUrl: string;
                    value: _22.MsgConfigureMinter;
                };
                removeMinter(value: _22.MsgRemoveMinter): {
                    typeUrl: string;
                    value: _22.MsgRemoveMinter;
                };
                mint(value: _22.MsgMint): {
                    typeUrl: string;
                    value: _22.MsgMint;
                };
                burn(value: _22.MsgBurn): {
                    typeUrl: string;
                    value: _22.MsgBurn;
                };
                blacklist(value: _22.MsgBlacklist): {
                    typeUrl: string;
                    value: _22.MsgBlacklist;
                };
                unblacklist(value: _22.MsgUnblacklist): {
                    typeUrl: string;
                    value: _22.MsgUnblacklist;
                };
                pause(value: _22.MsgPause): {
                    typeUrl: string;
                    value: _22.MsgPause;
                };
                unpause(value: _22.MsgUnpause): {
                    typeUrl: string;
                    value: _22.MsgUnpause;
                };
                configureMinterController(value: _22.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: _22.MsgConfigureMinterController;
                };
                removeMinterController(value: _22.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: _22.MsgRemoveMinterController;
                };
            };
            fromJSON: {
                updateMasterMinter(value: any): {
                    typeUrl: string;
                    value: _22.MsgUpdateMasterMinter;
                };
                updatePauser(value: any): {
                    typeUrl: string;
                    value: _22.MsgUpdatePauser;
                };
                updateBlacklister(value: any): {
                    typeUrl: string;
                    value: _22.MsgUpdateBlacklister;
                };
                updateOwner(value: any): {
                    typeUrl: string;
                    value: _22.MsgUpdateOwner;
                };
                acceptOwner(value: any): {
                    typeUrl: string;
                    value: _22.MsgAcceptOwner;
                };
                configureMinter(value: any): {
                    typeUrl: string;
                    value: _22.MsgConfigureMinter;
                };
                removeMinter(value: any): {
                    typeUrl: string;
                    value: _22.MsgRemoveMinter;
                };
                mint(value: any): {
                    typeUrl: string;
                    value: _22.MsgMint;
                };
                burn(value: any): {
                    typeUrl: string;
                    value: _22.MsgBurn;
                };
                blacklist(value: any): {
                    typeUrl: string;
                    value: _22.MsgBlacklist;
                };
                unblacklist(value: any): {
                    typeUrl: string;
                    value: _22.MsgUnblacklist;
                };
                pause(value: any): {
                    typeUrl: string;
                    value: _22.MsgPause;
                };
                unpause(value: any): {
                    typeUrl: string;
                    value: _22.MsgUnpause;
                };
                configureMinterController(value: any): {
                    typeUrl: string;
                    value: _22.MsgConfigureMinterController;
                };
                removeMinterController(value: any): {
                    typeUrl: string;
                    value: _22.MsgRemoveMinterController;
                };
            };
            fromPartial: {
                updateMasterMinter(value: _22.MsgUpdateMasterMinter): {
                    typeUrl: string;
                    value: _22.MsgUpdateMasterMinter;
                };
                updatePauser(value: _22.MsgUpdatePauser): {
                    typeUrl: string;
                    value: _22.MsgUpdatePauser;
                };
                updateBlacklister(value: _22.MsgUpdateBlacklister): {
                    typeUrl: string;
                    value: _22.MsgUpdateBlacklister;
                };
                updateOwner(value: _22.MsgUpdateOwner): {
                    typeUrl: string;
                    value: _22.MsgUpdateOwner;
                };
                acceptOwner(value: _22.MsgAcceptOwner): {
                    typeUrl: string;
                    value: _22.MsgAcceptOwner;
                };
                configureMinter(value: _22.MsgConfigureMinter): {
                    typeUrl: string;
                    value: _22.MsgConfigureMinter;
                };
                removeMinter(value: _22.MsgRemoveMinter): {
                    typeUrl: string;
                    value: _22.MsgRemoveMinter;
                };
                mint(value: _22.MsgMint): {
                    typeUrl: string;
                    value: _22.MsgMint;
                };
                burn(value: _22.MsgBurn): {
                    typeUrl: string;
                    value: _22.MsgBurn;
                };
                blacklist(value: _22.MsgBlacklist): {
                    typeUrl: string;
                    value: _22.MsgBlacklist;
                };
                unblacklist(value: _22.MsgUnblacklist): {
                    typeUrl: string;
                    value: _22.MsgUnblacklist;
                };
                pause(value: _22.MsgPause): {
                    typeUrl: string;
                    value: _22.MsgPause;
                };
                unpause(value: _22.MsgUnpause): {
                    typeUrl: string;
                    value: _22.MsgUnpause;
                };
                configureMinterController(value: _22.MsgConfigureMinterController): {
                    typeUrl: string;
                    value: _22.MsgConfigureMinterController;
                };
                removeMinterController(value: _22.MsgRemoveMinterController): {
                    typeUrl: string;
                    value: _22.MsgRemoveMinterController;
                };
            };
        };
        AminoConverter: {
            "/noble.tokenfactory.MsgUpdateMasterMinter": {
                aminoType: string;
                toAmino: (message: _22.MsgUpdateMasterMinter) => _22.MsgUpdateMasterMinterAmino;
                fromAmino: (object: _22.MsgUpdateMasterMinterAmino) => _22.MsgUpdateMasterMinter;
            };
            "/noble.tokenfactory.MsgUpdatePauser": {
                aminoType: string;
                toAmino: (message: _22.MsgUpdatePauser) => _22.MsgUpdatePauserAmino;
                fromAmino: (object: _22.MsgUpdatePauserAmino) => _22.MsgUpdatePauser;
            };
            "/noble.tokenfactory.MsgUpdateBlacklister": {
                aminoType: string;
                toAmino: (message: _22.MsgUpdateBlacklister) => _22.MsgUpdateBlacklisterAmino;
                fromAmino: (object: _22.MsgUpdateBlacklisterAmino) => _22.MsgUpdateBlacklister;
            };
            "/noble.tokenfactory.MsgUpdateOwner": {
                aminoType: string;
                toAmino: (message: _22.MsgUpdateOwner) => _22.MsgUpdateOwnerAmino;
                fromAmino: (object: _22.MsgUpdateOwnerAmino) => _22.MsgUpdateOwner;
            };
            "/noble.tokenfactory.MsgAcceptOwner": {
                aminoType: string;
                toAmino: (message: _22.MsgAcceptOwner) => _22.MsgAcceptOwnerAmino;
                fromAmino: (object: _22.MsgAcceptOwnerAmino) => _22.MsgAcceptOwner;
            };
            "/noble.tokenfactory.MsgConfigureMinter": {
                aminoType: string;
                toAmino: (message: _22.MsgConfigureMinter) => _22.MsgConfigureMinterAmino;
                fromAmino: (object: _22.MsgConfigureMinterAmino) => _22.MsgConfigureMinter;
            };
            "/noble.tokenfactory.MsgRemoveMinter": {
                aminoType: string;
                toAmino: (message: _22.MsgRemoveMinter) => _22.MsgRemoveMinterAmino;
                fromAmino: (object: _22.MsgRemoveMinterAmino) => _22.MsgRemoveMinter;
            };
            "/noble.tokenfactory.MsgMint": {
                aminoType: string;
                toAmino: (message: _22.MsgMint) => _22.MsgMintAmino;
                fromAmino: (object: _22.MsgMintAmino) => _22.MsgMint;
            };
            "/noble.tokenfactory.MsgBurn": {
                aminoType: string;
                toAmino: (message: _22.MsgBurn) => _22.MsgBurnAmino;
                fromAmino: (object: _22.MsgBurnAmino) => _22.MsgBurn;
            };
            "/noble.tokenfactory.MsgBlacklist": {
                aminoType: string;
                toAmino: (message: _22.MsgBlacklist) => _22.MsgBlacklistAmino;
                fromAmino: (object: _22.MsgBlacklistAmino) => _22.MsgBlacklist;
            };
            "/noble.tokenfactory.MsgUnblacklist": {
                aminoType: string;
                toAmino: (message: _22.MsgUnblacklist) => _22.MsgUnblacklistAmino;
                fromAmino: (object: _22.MsgUnblacklistAmino) => _22.MsgUnblacklist;
            };
            "/noble.tokenfactory.MsgPause": {
                aminoType: string;
                toAmino: (message: _22.MsgPause) => _22.MsgPauseAmino;
                fromAmino: (object: _22.MsgPauseAmino) => _22.MsgPause;
            };
            "/noble.tokenfactory.MsgUnpause": {
                aminoType: string;
                toAmino: (message: _22.MsgUnpause) => _22.MsgUnpauseAmino;
                fromAmino: (object: _22.MsgUnpauseAmino) => _22.MsgUnpause;
            };
            "/noble.tokenfactory.MsgConfigureMinterController": {
                aminoType: string;
                toAmino: (message: _22.MsgConfigureMinterController) => _22.MsgConfigureMinterControllerAmino;
                fromAmino: (object: _22.MsgConfigureMinterControllerAmino) => _22.MsgConfigureMinterController;
            };
            "/noble.tokenfactory.MsgRemoveMinterController": {
                aminoType: string;
                toAmino: (message: _22.MsgRemoveMinterController) => _22.MsgRemoveMinterControllerAmino;
                fromAmino: (object: _22.MsgRemoveMinterControllerAmino) => _22.MsgRemoveMinterController;
            };
        };
        MsgUpdateMasterMinter: {
            typeUrl: string;
            encode(message: _22.MsgUpdateMasterMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgUpdateMasterMinter;
            fromPartial(object: Partial<_22.MsgUpdateMasterMinter>): _22.MsgUpdateMasterMinter;
            fromAmino(object: _22.MsgUpdateMasterMinterAmino): _22.MsgUpdateMasterMinter;
            toAmino(message: _22.MsgUpdateMasterMinter): _22.MsgUpdateMasterMinterAmino;
            fromAminoMsg(object: _22.MsgUpdateMasterMinterAminoMsg): _22.MsgUpdateMasterMinter;
            fromProtoMsg(message: _22.MsgUpdateMasterMinterProtoMsg): _22.MsgUpdateMasterMinter;
            toProto(message: _22.MsgUpdateMasterMinter): Uint8Array;
            toProtoMsg(message: _22.MsgUpdateMasterMinter): _22.MsgUpdateMasterMinterProtoMsg;
        };
        MsgUpdateMasterMinterResponse: {
            typeUrl: string;
            encode(_: _22.MsgUpdateMasterMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgUpdateMasterMinterResponse;
            fromPartial(_: Partial<_22.MsgUpdateMasterMinterResponse>): _22.MsgUpdateMasterMinterResponse;
            fromAmino(_: _22.MsgUpdateMasterMinterResponseAmino): _22.MsgUpdateMasterMinterResponse;
            toAmino(_: _22.MsgUpdateMasterMinterResponse): _22.MsgUpdateMasterMinterResponseAmino;
            fromAminoMsg(object: _22.MsgUpdateMasterMinterResponseAminoMsg): _22.MsgUpdateMasterMinterResponse;
            fromProtoMsg(message: _22.MsgUpdateMasterMinterResponseProtoMsg): _22.MsgUpdateMasterMinterResponse;
            toProto(message: _22.MsgUpdateMasterMinterResponse): Uint8Array;
            toProtoMsg(message: _22.MsgUpdateMasterMinterResponse): _22.MsgUpdateMasterMinterResponseProtoMsg;
        };
        MsgUpdatePauser: {
            typeUrl: string;
            encode(message: _22.MsgUpdatePauser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgUpdatePauser;
            fromPartial(object: Partial<_22.MsgUpdatePauser>): _22.MsgUpdatePauser;
            fromAmino(object: _22.MsgUpdatePauserAmino): _22.MsgUpdatePauser;
            toAmino(message: _22.MsgUpdatePauser): _22.MsgUpdatePauserAmino;
            fromAminoMsg(object: _22.MsgUpdatePauserAminoMsg): _22.MsgUpdatePauser;
            fromProtoMsg(message: _22.MsgUpdatePauserProtoMsg): _22.MsgUpdatePauser;
            toProto(message: _22.MsgUpdatePauser): Uint8Array;
            toProtoMsg(message: _22.MsgUpdatePauser): _22.MsgUpdatePauserProtoMsg;
        };
        MsgUpdatePauserResponse: {
            typeUrl: string;
            encode(_: _22.MsgUpdatePauserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgUpdatePauserResponse;
            fromPartial(_: Partial<_22.MsgUpdatePauserResponse>): _22.MsgUpdatePauserResponse;
            fromAmino(_: _22.MsgUpdatePauserResponseAmino): _22.MsgUpdatePauserResponse;
            toAmino(_: _22.MsgUpdatePauserResponse): _22.MsgUpdatePauserResponseAmino;
            fromAminoMsg(object: _22.MsgUpdatePauserResponseAminoMsg): _22.MsgUpdatePauserResponse;
            fromProtoMsg(message: _22.MsgUpdatePauserResponseProtoMsg): _22.MsgUpdatePauserResponse;
            toProto(message: _22.MsgUpdatePauserResponse): Uint8Array;
            toProtoMsg(message: _22.MsgUpdatePauserResponse): _22.MsgUpdatePauserResponseProtoMsg;
        };
        MsgUpdateBlacklister: {
            typeUrl: string;
            encode(message: _22.MsgUpdateBlacklister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgUpdateBlacklister;
            fromPartial(object: Partial<_22.MsgUpdateBlacklister>): _22.MsgUpdateBlacklister;
            fromAmino(object: _22.MsgUpdateBlacklisterAmino): _22.MsgUpdateBlacklister;
            toAmino(message: _22.MsgUpdateBlacklister): _22.MsgUpdateBlacklisterAmino;
            fromAminoMsg(object: _22.MsgUpdateBlacklisterAminoMsg): _22.MsgUpdateBlacklister;
            fromProtoMsg(message: _22.MsgUpdateBlacklisterProtoMsg): _22.MsgUpdateBlacklister;
            toProto(message: _22.MsgUpdateBlacklister): Uint8Array;
            toProtoMsg(message: _22.MsgUpdateBlacklister): _22.MsgUpdateBlacklisterProtoMsg;
        };
        MsgUpdateBlacklisterResponse: {
            typeUrl: string;
            encode(_: _22.MsgUpdateBlacklisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgUpdateBlacklisterResponse;
            fromPartial(_: Partial<_22.MsgUpdateBlacklisterResponse>): _22.MsgUpdateBlacklisterResponse;
            fromAmino(_: _22.MsgUpdateBlacklisterResponseAmino): _22.MsgUpdateBlacklisterResponse;
            toAmino(_: _22.MsgUpdateBlacklisterResponse): _22.MsgUpdateBlacklisterResponseAmino;
            fromAminoMsg(object: _22.MsgUpdateBlacklisterResponseAminoMsg): _22.MsgUpdateBlacklisterResponse;
            fromProtoMsg(message: _22.MsgUpdateBlacklisterResponseProtoMsg): _22.MsgUpdateBlacklisterResponse;
            toProto(message: _22.MsgUpdateBlacklisterResponse): Uint8Array;
            toProtoMsg(message: _22.MsgUpdateBlacklisterResponse): _22.MsgUpdateBlacklisterResponseProtoMsg;
        };
        MsgUpdateOwner: {
            typeUrl: string;
            encode(message: _22.MsgUpdateOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgUpdateOwner;
            fromPartial(object: Partial<_22.MsgUpdateOwner>): _22.MsgUpdateOwner;
            fromAmino(object: _22.MsgUpdateOwnerAmino): _22.MsgUpdateOwner;
            toAmino(message: _22.MsgUpdateOwner): _22.MsgUpdateOwnerAmino;
            fromAminoMsg(object: _22.MsgUpdateOwnerAminoMsg): _22.MsgUpdateOwner;
            fromProtoMsg(message: _22.MsgUpdateOwnerProtoMsg): _22.MsgUpdateOwner;
            toProto(message: _22.MsgUpdateOwner): Uint8Array;
            toProtoMsg(message: _22.MsgUpdateOwner): _22.MsgUpdateOwnerProtoMsg;
        };
        MsgUpdateOwnerResponse: {
            typeUrl: string;
            encode(_: _22.MsgUpdateOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgUpdateOwnerResponse;
            fromPartial(_: Partial<_22.MsgUpdateOwnerResponse>): _22.MsgUpdateOwnerResponse;
            fromAmino(_: _22.MsgUpdateOwnerResponseAmino): _22.MsgUpdateOwnerResponse;
            toAmino(_: _22.MsgUpdateOwnerResponse): _22.MsgUpdateOwnerResponseAmino;
            fromAminoMsg(object: _22.MsgUpdateOwnerResponseAminoMsg): _22.MsgUpdateOwnerResponse;
            fromProtoMsg(message: _22.MsgUpdateOwnerResponseProtoMsg): _22.MsgUpdateOwnerResponse;
            toProto(message: _22.MsgUpdateOwnerResponse): Uint8Array;
            toProtoMsg(message: _22.MsgUpdateOwnerResponse): _22.MsgUpdateOwnerResponseProtoMsg;
        };
        MsgAcceptOwner: {
            typeUrl: string;
            encode(message: _22.MsgAcceptOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgAcceptOwner;
            fromPartial(object: Partial<_22.MsgAcceptOwner>): _22.MsgAcceptOwner;
            fromAmino(object: _22.MsgAcceptOwnerAmino): _22.MsgAcceptOwner;
            toAmino(message: _22.MsgAcceptOwner): _22.MsgAcceptOwnerAmino;
            fromAminoMsg(object: _22.MsgAcceptOwnerAminoMsg): _22.MsgAcceptOwner;
            fromProtoMsg(message: _22.MsgAcceptOwnerProtoMsg): _22.MsgAcceptOwner;
            toProto(message: _22.MsgAcceptOwner): Uint8Array;
            toProtoMsg(message: _22.MsgAcceptOwner): _22.MsgAcceptOwnerProtoMsg;
        };
        MsgAcceptOwnerResponse: {
            typeUrl: string;
            encode(_: _22.MsgAcceptOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgAcceptOwnerResponse;
            fromPartial(_: Partial<_22.MsgAcceptOwnerResponse>): _22.MsgAcceptOwnerResponse;
            fromAmino(_: _22.MsgAcceptOwnerResponseAmino): _22.MsgAcceptOwnerResponse;
            toAmino(_: _22.MsgAcceptOwnerResponse): _22.MsgAcceptOwnerResponseAmino;
            fromAminoMsg(object: _22.MsgAcceptOwnerResponseAminoMsg): _22.MsgAcceptOwnerResponse;
            fromProtoMsg(message: _22.MsgAcceptOwnerResponseProtoMsg): _22.MsgAcceptOwnerResponse;
            toProto(message: _22.MsgAcceptOwnerResponse): Uint8Array;
            toProtoMsg(message: _22.MsgAcceptOwnerResponse): _22.MsgAcceptOwnerResponseProtoMsg;
        };
        MsgConfigureMinter: {
            typeUrl: string;
            encode(message: _22.MsgConfigureMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgConfigureMinter;
            fromPartial(object: Partial<_22.MsgConfigureMinter>): _22.MsgConfigureMinter;
            fromAmino(object: _22.MsgConfigureMinterAmino): _22.MsgConfigureMinter;
            toAmino(message: _22.MsgConfigureMinter): _22.MsgConfigureMinterAmino;
            fromAminoMsg(object: _22.MsgConfigureMinterAminoMsg): _22.MsgConfigureMinter;
            fromProtoMsg(message: _22.MsgConfigureMinterProtoMsg): _22.MsgConfigureMinter;
            toProto(message: _22.MsgConfigureMinter): Uint8Array;
            toProtoMsg(message: _22.MsgConfigureMinter): _22.MsgConfigureMinterProtoMsg;
        };
        MsgConfigureMinterResponse: {
            typeUrl: string;
            encode(_: _22.MsgConfigureMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgConfigureMinterResponse;
            fromPartial(_: Partial<_22.MsgConfigureMinterResponse>): _22.MsgConfigureMinterResponse;
            fromAmino(_: _22.MsgConfigureMinterResponseAmino): _22.MsgConfigureMinterResponse;
            toAmino(_: _22.MsgConfigureMinterResponse): _22.MsgConfigureMinterResponseAmino;
            fromAminoMsg(object: _22.MsgConfigureMinterResponseAminoMsg): _22.MsgConfigureMinterResponse;
            fromProtoMsg(message: _22.MsgConfigureMinterResponseProtoMsg): _22.MsgConfigureMinterResponse;
            toProto(message: _22.MsgConfigureMinterResponse): Uint8Array;
            toProtoMsg(message: _22.MsgConfigureMinterResponse): _22.MsgConfigureMinterResponseProtoMsg;
        };
        MsgRemoveMinter: {
            typeUrl: string;
            encode(message: _22.MsgRemoveMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgRemoveMinter;
            fromPartial(object: Partial<_22.MsgRemoveMinter>): _22.MsgRemoveMinter;
            fromAmino(object: _22.MsgRemoveMinterAmino): _22.MsgRemoveMinter;
            toAmino(message: _22.MsgRemoveMinter): _22.MsgRemoveMinterAmino;
            fromAminoMsg(object: _22.MsgRemoveMinterAminoMsg): _22.MsgRemoveMinter;
            fromProtoMsg(message: _22.MsgRemoveMinterProtoMsg): _22.MsgRemoveMinter;
            toProto(message: _22.MsgRemoveMinter): Uint8Array;
            toProtoMsg(message: _22.MsgRemoveMinter): _22.MsgRemoveMinterProtoMsg;
        };
        MsgRemoveMinterResponse: {
            typeUrl: string;
            encode(_: _22.MsgRemoveMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgRemoveMinterResponse;
            fromPartial(_: Partial<_22.MsgRemoveMinterResponse>): _22.MsgRemoveMinterResponse;
            fromAmino(_: _22.MsgRemoveMinterResponseAmino): _22.MsgRemoveMinterResponse;
            toAmino(_: _22.MsgRemoveMinterResponse): _22.MsgRemoveMinterResponseAmino;
            fromAminoMsg(object: _22.MsgRemoveMinterResponseAminoMsg): _22.MsgRemoveMinterResponse;
            fromProtoMsg(message: _22.MsgRemoveMinterResponseProtoMsg): _22.MsgRemoveMinterResponse;
            toProto(message: _22.MsgRemoveMinterResponse): Uint8Array;
            toProtoMsg(message: _22.MsgRemoveMinterResponse): _22.MsgRemoveMinterResponseProtoMsg;
        };
        MsgMint: {
            typeUrl: string;
            encode(message: _22.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgMint;
            fromPartial(object: Partial<_22.MsgMint>): _22.MsgMint;
            fromAmino(object: _22.MsgMintAmino): _22.MsgMint;
            toAmino(message: _22.MsgMint): _22.MsgMintAmino;
            fromAminoMsg(object: _22.MsgMintAminoMsg): _22.MsgMint;
            fromProtoMsg(message: _22.MsgMintProtoMsg): _22.MsgMint;
            toProto(message: _22.MsgMint): Uint8Array;
            toProtoMsg(message: _22.MsgMint): _22.MsgMintProtoMsg;
        };
        MsgMintResponse: {
            typeUrl: string;
            encode(_: _22.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgMintResponse;
            fromPartial(_: Partial<_22.MsgMintResponse>): _22.MsgMintResponse;
            fromAmino(_: _22.MsgMintResponseAmino): _22.MsgMintResponse;
            toAmino(_: _22.MsgMintResponse): _22.MsgMintResponseAmino;
            fromAminoMsg(object: _22.MsgMintResponseAminoMsg): _22.MsgMintResponse;
            fromProtoMsg(message: _22.MsgMintResponseProtoMsg): _22.MsgMintResponse;
            toProto(message: _22.MsgMintResponse): Uint8Array;
            toProtoMsg(message: _22.MsgMintResponse): _22.MsgMintResponseProtoMsg;
        };
        MsgBurn: {
            typeUrl: string;
            encode(message: _22.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgBurn;
            fromPartial(object: Partial<_22.MsgBurn>): _22.MsgBurn;
            fromAmino(object: _22.MsgBurnAmino): _22.MsgBurn;
            toAmino(message: _22.MsgBurn): _22.MsgBurnAmino;
            fromAminoMsg(object: _22.MsgBurnAminoMsg): _22.MsgBurn;
            fromProtoMsg(message: _22.MsgBurnProtoMsg): _22.MsgBurn;
            toProto(message: _22.MsgBurn): Uint8Array;
            toProtoMsg(message: _22.MsgBurn): _22.MsgBurnProtoMsg;
        };
        MsgBurnResponse: {
            typeUrl: string;
            encode(_: _22.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgBurnResponse;
            fromPartial(_: Partial<_22.MsgBurnResponse>): _22.MsgBurnResponse;
            fromAmino(_: _22.MsgBurnResponseAmino): _22.MsgBurnResponse;
            toAmino(_: _22.MsgBurnResponse): _22.MsgBurnResponseAmino;
            fromAminoMsg(object: _22.MsgBurnResponseAminoMsg): _22.MsgBurnResponse;
            fromProtoMsg(message: _22.MsgBurnResponseProtoMsg): _22.MsgBurnResponse;
            toProto(message: _22.MsgBurnResponse): Uint8Array;
            toProtoMsg(message: _22.MsgBurnResponse): _22.MsgBurnResponseProtoMsg;
        };
        MsgBlacklist: {
            typeUrl: string;
            encode(message: _22.MsgBlacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgBlacklist;
            fromPartial(object: Partial<_22.MsgBlacklist>): _22.MsgBlacklist;
            fromAmino(object: _22.MsgBlacklistAmino): _22.MsgBlacklist;
            toAmino(message: _22.MsgBlacklist): _22.MsgBlacklistAmino;
            fromAminoMsg(object: _22.MsgBlacklistAminoMsg): _22.MsgBlacklist;
            fromProtoMsg(message: _22.MsgBlacklistProtoMsg): _22.MsgBlacklist;
            toProto(message: _22.MsgBlacklist): Uint8Array;
            toProtoMsg(message: _22.MsgBlacklist): _22.MsgBlacklistProtoMsg;
        };
        MsgBlacklistResponse: {
            typeUrl: string;
            encode(_: _22.MsgBlacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgBlacklistResponse;
            fromPartial(_: Partial<_22.MsgBlacklistResponse>): _22.MsgBlacklistResponse;
            fromAmino(_: _22.MsgBlacklistResponseAmino): _22.MsgBlacklistResponse;
            toAmino(_: _22.MsgBlacklistResponse): _22.MsgBlacklistResponseAmino;
            fromAminoMsg(object: _22.MsgBlacklistResponseAminoMsg): _22.MsgBlacklistResponse;
            fromProtoMsg(message: _22.MsgBlacklistResponseProtoMsg): _22.MsgBlacklistResponse;
            toProto(message: _22.MsgBlacklistResponse): Uint8Array;
            toProtoMsg(message: _22.MsgBlacklistResponse): _22.MsgBlacklistResponseProtoMsg;
        };
        MsgUnblacklist: {
            typeUrl: string;
            encode(message: _22.MsgUnblacklist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgUnblacklist;
            fromPartial(object: Partial<_22.MsgUnblacklist>): _22.MsgUnblacklist;
            fromAmino(object: _22.MsgUnblacklistAmino): _22.MsgUnblacklist;
            toAmino(message: _22.MsgUnblacklist): _22.MsgUnblacklistAmino;
            fromAminoMsg(object: _22.MsgUnblacklistAminoMsg): _22.MsgUnblacklist;
            fromProtoMsg(message: _22.MsgUnblacklistProtoMsg): _22.MsgUnblacklist;
            toProto(message: _22.MsgUnblacklist): Uint8Array;
            toProtoMsg(message: _22.MsgUnblacklist): _22.MsgUnblacklistProtoMsg;
        };
        MsgUnblacklistResponse: {
            typeUrl: string;
            encode(_: _22.MsgUnblacklistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgUnblacklistResponse;
            fromPartial(_: Partial<_22.MsgUnblacklistResponse>): _22.MsgUnblacklistResponse;
            fromAmino(_: _22.MsgUnblacklistResponseAmino): _22.MsgUnblacklistResponse;
            toAmino(_: _22.MsgUnblacklistResponse): _22.MsgUnblacklistResponseAmino;
            fromAminoMsg(object: _22.MsgUnblacklistResponseAminoMsg): _22.MsgUnblacklistResponse;
            fromProtoMsg(message: _22.MsgUnblacklistResponseProtoMsg): _22.MsgUnblacklistResponse;
            toProto(message: _22.MsgUnblacklistResponse): Uint8Array;
            toProtoMsg(message: _22.MsgUnblacklistResponse): _22.MsgUnblacklistResponseProtoMsg;
        };
        MsgPause: {
            typeUrl: string;
            encode(message: _22.MsgPause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgPause;
            fromPartial(object: Partial<_22.MsgPause>): _22.MsgPause;
            fromAmino(object: _22.MsgPauseAmino): _22.MsgPause;
            toAmino(message: _22.MsgPause): _22.MsgPauseAmino;
            fromAminoMsg(object: _22.MsgPauseAminoMsg): _22.MsgPause;
            fromProtoMsg(message: _22.MsgPauseProtoMsg): _22.MsgPause;
            toProto(message: _22.MsgPause): Uint8Array;
            toProtoMsg(message: _22.MsgPause): _22.MsgPauseProtoMsg;
        };
        MsgPauseResponse: {
            typeUrl: string;
            encode(_: _22.MsgPauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgPauseResponse;
            fromPartial(_: Partial<_22.MsgPauseResponse>): _22.MsgPauseResponse;
            fromAmino(_: _22.MsgPauseResponseAmino): _22.MsgPauseResponse;
            toAmino(_: _22.MsgPauseResponse): _22.MsgPauseResponseAmino;
            fromAminoMsg(object: _22.MsgPauseResponseAminoMsg): _22.MsgPauseResponse;
            fromProtoMsg(message: _22.MsgPauseResponseProtoMsg): _22.MsgPauseResponse;
            toProto(message: _22.MsgPauseResponse): Uint8Array;
            toProtoMsg(message: _22.MsgPauseResponse): _22.MsgPauseResponseProtoMsg;
        };
        MsgUnpause: {
            typeUrl: string;
            encode(message: _22.MsgUnpause, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgUnpause;
            fromPartial(object: Partial<_22.MsgUnpause>): _22.MsgUnpause;
            fromAmino(object: _22.MsgUnpauseAmino): _22.MsgUnpause;
            toAmino(message: _22.MsgUnpause): _22.MsgUnpauseAmino;
            fromAminoMsg(object: _22.MsgUnpauseAminoMsg): _22.MsgUnpause;
            fromProtoMsg(message: _22.MsgUnpauseProtoMsg): _22.MsgUnpause;
            toProto(message: _22.MsgUnpause): Uint8Array;
            toProtoMsg(message: _22.MsgUnpause): _22.MsgUnpauseProtoMsg;
        };
        MsgUnpauseResponse: {
            typeUrl: string;
            encode(_: _22.MsgUnpauseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgUnpauseResponse;
            fromPartial(_: Partial<_22.MsgUnpauseResponse>): _22.MsgUnpauseResponse;
            fromAmino(_: _22.MsgUnpauseResponseAmino): _22.MsgUnpauseResponse;
            toAmino(_: _22.MsgUnpauseResponse): _22.MsgUnpauseResponseAmino;
            fromAminoMsg(object: _22.MsgUnpauseResponseAminoMsg): _22.MsgUnpauseResponse;
            fromProtoMsg(message: _22.MsgUnpauseResponseProtoMsg): _22.MsgUnpauseResponse;
            toProto(message: _22.MsgUnpauseResponse): Uint8Array;
            toProtoMsg(message: _22.MsgUnpauseResponse): _22.MsgUnpauseResponseProtoMsg;
        };
        MsgConfigureMinterController: {
            typeUrl: string;
            encode(message: _22.MsgConfigureMinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgConfigureMinterController;
            fromPartial(object: Partial<_22.MsgConfigureMinterController>): _22.MsgConfigureMinterController;
            fromAmino(object: _22.MsgConfigureMinterControllerAmino): _22.MsgConfigureMinterController;
            toAmino(message: _22.MsgConfigureMinterController): _22.MsgConfigureMinterControllerAmino;
            fromAminoMsg(object: _22.MsgConfigureMinterControllerAminoMsg): _22.MsgConfigureMinterController;
            fromProtoMsg(message: _22.MsgConfigureMinterControllerProtoMsg): _22.MsgConfigureMinterController;
            toProto(message: _22.MsgConfigureMinterController): Uint8Array;
            toProtoMsg(message: _22.MsgConfigureMinterController): _22.MsgConfigureMinterControllerProtoMsg;
        };
        MsgConfigureMinterControllerResponse: {
            typeUrl: string;
            encode(_: _22.MsgConfigureMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgConfigureMinterControllerResponse;
            fromPartial(_: Partial<_22.MsgConfigureMinterControllerResponse>): _22.MsgConfigureMinterControllerResponse;
            fromAmino(_: _22.MsgConfigureMinterControllerResponseAmino): _22.MsgConfigureMinterControllerResponse;
            toAmino(_: _22.MsgConfigureMinterControllerResponse): _22.MsgConfigureMinterControllerResponseAmino;
            fromAminoMsg(object: _22.MsgConfigureMinterControllerResponseAminoMsg): _22.MsgConfigureMinterControllerResponse;
            fromProtoMsg(message: _22.MsgConfigureMinterControllerResponseProtoMsg): _22.MsgConfigureMinterControllerResponse;
            toProto(message: _22.MsgConfigureMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _22.MsgConfigureMinterControllerResponse): _22.MsgConfigureMinterControllerResponseProtoMsg;
        };
        MsgRemoveMinterController: {
            typeUrl: string;
            encode(message: _22.MsgRemoveMinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.MsgRemoveMinterController;
            fromPartial(object: Partial<_22.MsgRemoveMinterController>): _22.MsgRemoveMinterController;
            fromAmino(object: _22.MsgRemoveMinterControllerAmino): _22.MsgRemoveMinterController;
            toAmino(message: _22.MsgRemoveMinterController): _22.MsgRemoveMinterControllerAmino;
            fromAminoMsg(object: _22.MsgRemoveMinterControllerAminoMsg): _22.MsgRemoveMinterController;
            fromProtoMsg(message: _22.MsgRemoveMinterControllerProtoMsg): _22.MsgRemoveMinterController;
            toProto(message: _22.MsgRemoveMinterController): Uint8Array;
            toProtoMsg(message: _22.MsgRemoveMinterController): _22.MsgRemoveMinterControllerProtoMsg;
        };
        MsgRemoveMinterControllerResponse: {
            typeUrl: string;
            encode(_: _22.MsgRemoveMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.MsgRemoveMinterControllerResponse;
            fromPartial(_: Partial<_22.MsgRemoveMinterControllerResponse>): _22.MsgRemoveMinterControllerResponse;
            fromAmino(_: _22.MsgRemoveMinterControllerResponseAmino): _22.MsgRemoveMinterControllerResponse;
            toAmino(_: _22.MsgRemoveMinterControllerResponse): _22.MsgRemoveMinterControllerResponseAmino;
            fromAminoMsg(object: _22.MsgRemoveMinterControllerResponseAminoMsg): _22.MsgRemoveMinterControllerResponse;
            fromProtoMsg(message: _22.MsgRemoveMinterControllerResponseProtoMsg): _22.MsgRemoveMinterControllerResponse;
            toProto(message: _22.MsgRemoveMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _22.MsgRemoveMinterControllerResponse): _22.MsgRemoveMinterControllerResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _21.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryParamsRequest;
            fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
            fromAmino(_: _21.QueryParamsRequestAmino): _21.QueryParamsRequest;
            toAmino(_: _21.QueryParamsRequest): _21.QueryParamsRequestAmino;
            fromAminoMsg(object: _21.QueryParamsRequestAminoMsg): _21.QueryParamsRequest;
            fromProtoMsg(message: _21.QueryParamsRequestProtoMsg): _21.QueryParamsRequest;
            toProto(message: _21.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _21.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryParamsResponse;
            fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
            fromAmino(object: _21.QueryParamsResponseAmino): _21.QueryParamsResponse;
            toAmino(message: _21.QueryParamsResponse): _21.QueryParamsResponseAmino;
            fromAminoMsg(object: _21.QueryParamsResponseAminoMsg): _21.QueryParamsResponse;
            fromProtoMsg(message: _21.QueryParamsResponseProtoMsg): _21.QueryParamsResponse;
            toProto(message: _21.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseProtoMsg;
        };
        QueryGetBlacklistedRequest: {
            typeUrl: string;
            encode(message: _21.QueryGetBlacklistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetBlacklistedRequest;
            fromPartial(object: Partial<_21.QueryGetBlacklistedRequest>): _21.QueryGetBlacklistedRequest;
            fromAmino(object: _21.QueryGetBlacklistedRequestAmino): _21.QueryGetBlacklistedRequest;
            toAmino(message: _21.QueryGetBlacklistedRequest): _21.QueryGetBlacklistedRequestAmino;
            fromAminoMsg(object: _21.QueryGetBlacklistedRequestAminoMsg): _21.QueryGetBlacklistedRequest;
            fromProtoMsg(message: _21.QueryGetBlacklistedRequestProtoMsg): _21.QueryGetBlacklistedRequest;
            toProto(message: _21.QueryGetBlacklistedRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetBlacklistedRequest): _21.QueryGetBlacklistedRequestProtoMsg;
        };
        QueryGetBlacklistedResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetBlacklistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetBlacklistedResponse;
            fromPartial(object: Partial<_21.QueryGetBlacklistedResponse>): _21.QueryGetBlacklistedResponse;
            fromAmino(object: _21.QueryGetBlacklistedResponseAmino): _21.QueryGetBlacklistedResponse;
            toAmino(message: _21.QueryGetBlacklistedResponse): _21.QueryGetBlacklistedResponseAmino;
            fromAminoMsg(object: _21.QueryGetBlacklistedResponseAminoMsg): _21.QueryGetBlacklistedResponse;
            fromProtoMsg(message: _21.QueryGetBlacklistedResponseProtoMsg): _21.QueryGetBlacklistedResponse;
            toProto(message: _21.QueryGetBlacklistedResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetBlacklistedResponse): _21.QueryGetBlacklistedResponseProtoMsg;
        };
        QueryAllBlacklistedRequest: {
            typeUrl: string;
            encode(message: _21.QueryAllBlacklistedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryAllBlacklistedRequest;
            fromPartial(object: Partial<_21.QueryAllBlacklistedRequest>): _21.QueryAllBlacklistedRequest;
            fromAmino(object: _21.QueryAllBlacklistedRequestAmino): _21.QueryAllBlacklistedRequest;
            toAmino(message: _21.QueryAllBlacklistedRequest): _21.QueryAllBlacklistedRequestAmino;
            fromAminoMsg(object: _21.QueryAllBlacklistedRequestAminoMsg): _21.QueryAllBlacklistedRequest;
            fromProtoMsg(message: _21.QueryAllBlacklistedRequestProtoMsg): _21.QueryAllBlacklistedRequest;
            toProto(message: _21.QueryAllBlacklistedRequest): Uint8Array;
            toProtoMsg(message: _21.QueryAllBlacklistedRequest): _21.QueryAllBlacklistedRequestProtoMsg;
        };
        QueryAllBlacklistedResponse: {
            typeUrl: string;
            encode(message: _21.QueryAllBlacklistedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryAllBlacklistedResponse;
            fromPartial(object: Partial<_21.QueryAllBlacklistedResponse>): _21.QueryAllBlacklistedResponse;
            fromAmino(object: _21.QueryAllBlacklistedResponseAmino): _21.QueryAllBlacklistedResponse;
            toAmino(message: _21.QueryAllBlacklistedResponse): _21.QueryAllBlacklistedResponseAmino;
            fromAminoMsg(object: _21.QueryAllBlacklistedResponseAminoMsg): _21.QueryAllBlacklistedResponse;
            fromProtoMsg(message: _21.QueryAllBlacklistedResponseProtoMsg): _21.QueryAllBlacklistedResponse;
            toProto(message: _21.QueryAllBlacklistedResponse): Uint8Array;
            toProtoMsg(message: _21.QueryAllBlacklistedResponse): _21.QueryAllBlacklistedResponseProtoMsg;
        };
        QueryGetPausedRequest: {
            typeUrl: string;
            encode(_: _21.QueryGetPausedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryGetPausedRequest;
            fromPartial(_: Partial<_21.QueryGetPausedRequest>): _21.QueryGetPausedRequest;
            fromAmino(_: _21.QueryGetPausedRequestAmino): _21.QueryGetPausedRequest;
            toAmino(_: _21.QueryGetPausedRequest): _21.QueryGetPausedRequestAmino;
            fromAminoMsg(object: _21.QueryGetPausedRequestAminoMsg): _21.QueryGetPausedRequest;
            fromProtoMsg(message: _21.QueryGetPausedRequestProtoMsg): _21.QueryGetPausedRequest;
            toProto(message: _21.QueryGetPausedRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetPausedRequest): _21.QueryGetPausedRequestProtoMsg;
        };
        QueryGetPausedResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetPausedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetPausedResponse;
            fromPartial(object: Partial<_21.QueryGetPausedResponse>): _21.QueryGetPausedResponse;
            fromAmino(object: _21.QueryGetPausedResponseAmino): _21.QueryGetPausedResponse;
            toAmino(message: _21.QueryGetPausedResponse): _21.QueryGetPausedResponseAmino;
            fromAminoMsg(object: _21.QueryGetPausedResponseAminoMsg): _21.QueryGetPausedResponse;
            fromProtoMsg(message: _21.QueryGetPausedResponseProtoMsg): _21.QueryGetPausedResponse;
            toProto(message: _21.QueryGetPausedResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetPausedResponse): _21.QueryGetPausedResponseProtoMsg;
        };
        QueryGetMasterMinterRequest: {
            typeUrl: string;
            encode(_: _21.QueryGetMasterMinterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryGetMasterMinterRequest;
            fromPartial(_: Partial<_21.QueryGetMasterMinterRequest>): _21.QueryGetMasterMinterRequest;
            fromAmino(_: _21.QueryGetMasterMinterRequestAmino): _21.QueryGetMasterMinterRequest;
            toAmino(_: _21.QueryGetMasterMinterRequest): _21.QueryGetMasterMinterRequestAmino;
            fromAminoMsg(object: _21.QueryGetMasterMinterRequestAminoMsg): _21.QueryGetMasterMinterRequest;
            fromProtoMsg(message: _21.QueryGetMasterMinterRequestProtoMsg): _21.QueryGetMasterMinterRequest;
            toProto(message: _21.QueryGetMasterMinterRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetMasterMinterRequest): _21.QueryGetMasterMinterRequestProtoMsg;
        };
        QueryGetMasterMinterResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetMasterMinterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetMasterMinterResponse;
            fromPartial(object: Partial<_21.QueryGetMasterMinterResponse>): _21.QueryGetMasterMinterResponse;
            fromAmino(object: _21.QueryGetMasterMinterResponseAmino): _21.QueryGetMasterMinterResponse;
            toAmino(message: _21.QueryGetMasterMinterResponse): _21.QueryGetMasterMinterResponseAmino;
            fromAminoMsg(object: _21.QueryGetMasterMinterResponseAminoMsg): _21.QueryGetMasterMinterResponse;
            fromProtoMsg(message: _21.QueryGetMasterMinterResponseProtoMsg): _21.QueryGetMasterMinterResponse;
            toProto(message: _21.QueryGetMasterMinterResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetMasterMinterResponse): _21.QueryGetMasterMinterResponseProtoMsg;
        };
        QueryGetMintersRequest: {
            typeUrl: string;
            encode(message: _21.QueryGetMintersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetMintersRequest;
            fromPartial(object: Partial<_21.QueryGetMintersRequest>): _21.QueryGetMintersRequest;
            fromAmino(object: _21.QueryGetMintersRequestAmino): _21.QueryGetMintersRequest;
            toAmino(message: _21.QueryGetMintersRequest): _21.QueryGetMintersRequestAmino;
            fromAminoMsg(object: _21.QueryGetMintersRequestAminoMsg): _21.QueryGetMintersRequest;
            fromProtoMsg(message: _21.QueryGetMintersRequestProtoMsg): _21.QueryGetMintersRequest;
            toProto(message: _21.QueryGetMintersRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetMintersRequest): _21.QueryGetMintersRequestProtoMsg;
        };
        QueryGetMintersResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetMintersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetMintersResponse;
            fromPartial(object: Partial<_21.QueryGetMintersResponse>): _21.QueryGetMintersResponse;
            fromAmino(object: _21.QueryGetMintersResponseAmino): _21.QueryGetMintersResponse;
            toAmino(message: _21.QueryGetMintersResponse): _21.QueryGetMintersResponseAmino;
            fromAminoMsg(object: _21.QueryGetMintersResponseAminoMsg): _21.QueryGetMintersResponse;
            fromProtoMsg(message: _21.QueryGetMintersResponseProtoMsg): _21.QueryGetMintersResponse;
            toProto(message: _21.QueryGetMintersResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetMintersResponse): _21.QueryGetMintersResponseProtoMsg;
        };
        QueryAllMintersRequest: {
            typeUrl: string;
            encode(message: _21.QueryAllMintersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryAllMintersRequest;
            fromPartial(object: Partial<_21.QueryAllMintersRequest>): _21.QueryAllMintersRequest;
            fromAmino(object: _21.QueryAllMintersRequestAmino): _21.QueryAllMintersRequest;
            toAmino(message: _21.QueryAllMintersRequest): _21.QueryAllMintersRequestAmino;
            fromAminoMsg(object: _21.QueryAllMintersRequestAminoMsg): _21.QueryAllMintersRequest;
            fromProtoMsg(message: _21.QueryAllMintersRequestProtoMsg): _21.QueryAllMintersRequest;
            toProto(message: _21.QueryAllMintersRequest): Uint8Array;
            toProtoMsg(message: _21.QueryAllMintersRequest): _21.QueryAllMintersRequestProtoMsg;
        };
        QueryAllMintersResponse: {
            typeUrl: string;
            encode(message: _21.QueryAllMintersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryAllMintersResponse;
            fromPartial(object: Partial<_21.QueryAllMintersResponse>): _21.QueryAllMintersResponse;
            fromAmino(object: _21.QueryAllMintersResponseAmino): _21.QueryAllMintersResponse;
            toAmino(message: _21.QueryAllMintersResponse): _21.QueryAllMintersResponseAmino;
            fromAminoMsg(object: _21.QueryAllMintersResponseAminoMsg): _21.QueryAllMintersResponse;
            fromProtoMsg(message: _21.QueryAllMintersResponseProtoMsg): _21.QueryAllMintersResponse;
            toProto(message: _21.QueryAllMintersResponse): Uint8Array;
            toProtoMsg(message: _21.QueryAllMintersResponse): _21.QueryAllMintersResponseProtoMsg;
        };
        QueryGetPauserRequest: {
            typeUrl: string;
            encode(_: _21.QueryGetPauserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryGetPauserRequest;
            fromPartial(_: Partial<_21.QueryGetPauserRequest>): _21.QueryGetPauserRequest;
            fromAmino(_: _21.QueryGetPauserRequestAmino): _21.QueryGetPauserRequest;
            toAmino(_: _21.QueryGetPauserRequest): _21.QueryGetPauserRequestAmino;
            fromAminoMsg(object: _21.QueryGetPauserRequestAminoMsg): _21.QueryGetPauserRequest;
            fromProtoMsg(message: _21.QueryGetPauserRequestProtoMsg): _21.QueryGetPauserRequest;
            toProto(message: _21.QueryGetPauserRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetPauserRequest): _21.QueryGetPauserRequestProtoMsg;
        };
        QueryGetPauserResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetPauserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetPauserResponse;
            fromPartial(object: Partial<_21.QueryGetPauserResponse>): _21.QueryGetPauserResponse;
            fromAmino(object: _21.QueryGetPauserResponseAmino): _21.QueryGetPauserResponse;
            toAmino(message: _21.QueryGetPauserResponse): _21.QueryGetPauserResponseAmino;
            fromAminoMsg(object: _21.QueryGetPauserResponseAminoMsg): _21.QueryGetPauserResponse;
            fromProtoMsg(message: _21.QueryGetPauserResponseProtoMsg): _21.QueryGetPauserResponse;
            toProto(message: _21.QueryGetPauserResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetPauserResponse): _21.QueryGetPauserResponseProtoMsg;
        };
        QueryGetBlacklisterRequest: {
            typeUrl: string;
            encode(_: _21.QueryGetBlacklisterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryGetBlacklisterRequest;
            fromPartial(_: Partial<_21.QueryGetBlacklisterRequest>): _21.QueryGetBlacklisterRequest;
            fromAmino(_: _21.QueryGetBlacklisterRequestAmino): _21.QueryGetBlacklisterRequest;
            toAmino(_: _21.QueryGetBlacklisterRequest): _21.QueryGetBlacklisterRequestAmino;
            fromAminoMsg(object: _21.QueryGetBlacklisterRequestAminoMsg): _21.QueryGetBlacklisterRequest;
            fromProtoMsg(message: _21.QueryGetBlacklisterRequestProtoMsg): _21.QueryGetBlacklisterRequest;
            toProto(message: _21.QueryGetBlacklisterRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetBlacklisterRequest): _21.QueryGetBlacklisterRequestProtoMsg;
        };
        QueryGetBlacklisterResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetBlacklisterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetBlacklisterResponse;
            fromPartial(object: Partial<_21.QueryGetBlacklisterResponse>): _21.QueryGetBlacklisterResponse;
            fromAmino(object: _21.QueryGetBlacklisterResponseAmino): _21.QueryGetBlacklisterResponse;
            toAmino(message: _21.QueryGetBlacklisterResponse): _21.QueryGetBlacklisterResponseAmino;
            fromAminoMsg(object: _21.QueryGetBlacklisterResponseAminoMsg): _21.QueryGetBlacklisterResponse;
            fromProtoMsg(message: _21.QueryGetBlacklisterResponseProtoMsg): _21.QueryGetBlacklisterResponse;
            toProto(message: _21.QueryGetBlacklisterResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetBlacklisterResponse): _21.QueryGetBlacklisterResponseProtoMsg;
        };
        QueryGetOwnerRequest: {
            typeUrl: string;
            encode(_: _21.QueryGetOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryGetOwnerRequest;
            fromPartial(_: Partial<_21.QueryGetOwnerRequest>): _21.QueryGetOwnerRequest;
            fromAmino(_: _21.QueryGetOwnerRequestAmino): _21.QueryGetOwnerRequest;
            toAmino(_: _21.QueryGetOwnerRequest): _21.QueryGetOwnerRequestAmino;
            fromAminoMsg(object: _21.QueryGetOwnerRequestAminoMsg): _21.QueryGetOwnerRequest;
            fromProtoMsg(message: _21.QueryGetOwnerRequestProtoMsg): _21.QueryGetOwnerRequest;
            toProto(message: _21.QueryGetOwnerRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetOwnerRequest): _21.QueryGetOwnerRequestProtoMsg;
        };
        QueryGetOwnerResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetOwnerResponse;
            fromPartial(object: Partial<_21.QueryGetOwnerResponse>): _21.QueryGetOwnerResponse;
            fromAmino(object: _21.QueryGetOwnerResponseAmino): _21.QueryGetOwnerResponse;
            toAmino(message: _21.QueryGetOwnerResponse): _21.QueryGetOwnerResponseAmino;
            fromAminoMsg(object: _21.QueryGetOwnerResponseAminoMsg): _21.QueryGetOwnerResponse;
            fromProtoMsg(message: _21.QueryGetOwnerResponseProtoMsg): _21.QueryGetOwnerResponse;
            toProto(message: _21.QueryGetOwnerResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetOwnerResponse): _21.QueryGetOwnerResponseProtoMsg;
        };
        QueryGetMinterControllerRequest: {
            typeUrl: string;
            encode(message: _21.QueryGetMinterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetMinterControllerRequest;
            fromPartial(object: Partial<_21.QueryGetMinterControllerRequest>): _21.QueryGetMinterControllerRequest;
            fromAmino(object: _21.QueryGetMinterControllerRequestAmino): _21.QueryGetMinterControllerRequest;
            toAmino(message: _21.QueryGetMinterControllerRequest): _21.QueryGetMinterControllerRequestAmino;
            fromAminoMsg(object: _21.QueryGetMinterControllerRequestAminoMsg): _21.QueryGetMinterControllerRequest;
            fromProtoMsg(message: _21.QueryGetMinterControllerRequestProtoMsg): _21.QueryGetMinterControllerRequest;
            toProto(message: _21.QueryGetMinterControllerRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetMinterControllerRequest): _21.QueryGetMinterControllerRequestProtoMsg;
        };
        QueryGetMinterControllerResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetMinterControllerResponse;
            fromPartial(object: Partial<_21.QueryGetMinterControllerResponse>): _21.QueryGetMinterControllerResponse;
            fromAmino(object: _21.QueryGetMinterControllerResponseAmino): _21.QueryGetMinterControllerResponse;
            toAmino(message: _21.QueryGetMinterControllerResponse): _21.QueryGetMinterControllerResponseAmino;
            fromAminoMsg(object: _21.QueryGetMinterControllerResponseAminoMsg): _21.QueryGetMinterControllerResponse;
            fromProtoMsg(message: _21.QueryGetMinterControllerResponseProtoMsg): _21.QueryGetMinterControllerResponse;
            toProto(message: _21.QueryGetMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetMinterControllerResponse): _21.QueryGetMinterControllerResponseProtoMsg;
        };
        QueryAllMinterControllerRequest: {
            typeUrl: string;
            encode(message: _21.QueryAllMinterControllerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryAllMinterControllerRequest;
            fromPartial(object: Partial<_21.QueryAllMinterControllerRequest>): _21.QueryAllMinterControllerRequest;
            fromAmino(object: _21.QueryAllMinterControllerRequestAmino): _21.QueryAllMinterControllerRequest;
            toAmino(message: _21.QueryAllMinterControllerRequest): _21.QueryAllMinterControllerRequestAmino;
            fromAminoMsg(object: _21.QueryAllMinterControllerRequestAminoMsg): _21.QueryAllMinterControllerRequest;
            fromProtoMsg(message: _21.QueryAllMinterControllerRequestProtoMsg): _21.QueryAllMinterControllerRequest;
            toProto(message: _21.QueryAllMinterControllerRequest): Uint8Array;
            toProtoMsg(message: _21.QueryAllMinterControllerRequest): _21.QueryAllMinterControllerRequestProtoMsg;
        };
        QueryAllMinterControllerResponse: {
            typeUrl: string;
            encode(message: _21.QueryAllMinterControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryAllMinterControllerResponse;
            fromPartial(object: Partial<_21.QueryAllMinterControllerResponse>): _21.QueryAllMinterControllerResponse;
            fromAmino(object: _21.QueryAllMinterControllerResponseAmino): _21.QueryAllMinterControllerResponse;
            toAmino(message: _21.QueryAllMinterControllerResponse): _21.QueryAllMinterControllerResponseAmino;
            fromAminoMsg(object: _21.QueryAllMinterControllerResponseAminoMsg): _21.QueryAllMinterControllerResponse;
            fromProtoMsg(message: _21.QueryAllMinterControllerResponseProtoMsg): _21.QueryAllMinterControllerResponse;
            toProto(message: _21.QueryAllMinterControllerResponse): Uint8Array;
            toProtoMsg(message: _21.QueryAllMinterControllerResponse): _21.QueryAllMinterControllerResponseProtoMsg;
        };
        QueryGetMintingDenomRequest: {
            typeUrl: string;
            encode(_: _21.QueryGetMintingDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _21.QueryGetMintingDenomRequest;
            fromPartial(_: Partial<_21.QueryGetMintingDenomRequest>): _21.QueryGetMintingDenomRequest;
            fromAmino(_: _21.QueryGetMintingDenomRequestAmino): _21.QueryGetMintingDenomRequest;
            toAmino(_: _21.QueryGetMintingDenomRequest): _21.QueryGetMintingDenomRequestAmino;
            fromAminoMsg(object: _21.QueryGetMintingDenomRequestAminoMsg): _21.QueryGetMintingDenomRequest;
            fromProtoMsg(message: _21.QueryGetMintingDenomRequestProtoMsg): _21.QueryGetMintingDenomRequest;
            toProto(message: _21.QueryGetMintingDenomRequest): Uint8Array;
            toProtoMsg(message: _21.QueryGetMintingDenomRequest): _21.QueryGetMintingDenomRequestProtoMsg;
        };
        QueryGetMintingDenomResponse: {
            typeUrl: string;
            encode(message: _21.QueryGetMintingDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.QueryGetMintingDenomResponse;
            fromPartial(object: Partial<_21.QueryGetMintingDenomResponse>): _21.QueryGetMintingDenomResponse;
            fromAmino(object: _21.QueryGetMintingDenomResponseAmino): _21.QueryGetMintingDenomResponse;
            toAmino(message: _21.QueryGetMintingDenomResponse): _21.QueryGetMintingDenomResponseAmino;
            fromAminoMsg(object: _21.QueryGetMintingDenomResponseAminoMsg): _21.QueryGetMintingDenomResponse;
            fromProtoMsg(message: _21.QueryGetMintingDenomResponseProtoMsg): _21.QueryGetMintingDenomResponse;
            toProto(message: _21.QueryGetMintingDenomResponse): Uint8Array;
            toProtoMsg(message: _21.QueryGetMintingDenomResponse): _21.QueryGetMintingDenomResponseProtoMsg;
        };
        Pauser: {
            typeUrl: string;
            encode(message: _20.Pauser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.Pauser;
            fromPartial(object: Partial<_20.Pauser>): _20.Pauser;
            fromAmino(object: _20.PauserAmino): _20.Pauser;
            toAmino(message: _20.Pauser): _20.PauserAmino;
            fromAminoMsg(object: _20.PauserAminoMsg): _20.Pauser;
            fromProtoMsg(message: _20.PauserProtoMsg): _20.Pauser;
            toProto(message: _20.Pauser): Uint8Array;
            toProtoMsg(message: _20.Pauser): _20.PauserProtoMsg;
        };
        Paused: {
            typeUrl: string;
            encode(message: _19.Paused, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.Paused;
            fromPartial(object: Partial<_19.Paused>): _19.Paused;
            fromAmino(object: _19.PausedAmino): _19.Paused;
            toAmino(message: _19.Paused): _19.PausedAmino;
            fromAminoMsg(object: _19.PausedAminoMsg): _19.Paused;
            fromProtoMsg(message: _19.PausedProtoMsg): _19.Paused;
            toProto(message: _19.Paused): Uint8Array;
            toProtoMsg(message: _19.Paused): _19.PausedProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _18.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.Params;
            fromPartial(_: Partial<_18.Params>): _18.Params;
            fromAmino(_: _18.ParamsAmino): _18.Params;
            toAmino(_: _18.Params): _18.ParamsAmino;
            fromAminoMsg(object: _18.ParamsAminoMsg): _18.Params;
            fromProtoMsg(message: _18.ParamsProtoMsg): _18.Params;
            toProto(message: _18.Params): Uint8Array;
            toProtoMsg(message: _18.Params): _18.ParamsProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _17.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.Owner;
            fromPartial(object: Partial<_17.Owner>): _17.Owner;
            fromAmino(object: _17.OwnerAmino): _17.Owner;
            toAmino(message: _17.Owner): _17.OwnerAmino;
            fromAminoMsg(object: _17.OwnerAminoMsg): _17.Owner;
            fromProtoMsg(message: _17.OwnerProtoMsg): _17.Owner;
            toProto(message: _17.Owner): Uint8Array;
            toProtoMsg(message: _17.Owner): _17.OwnerProtoMsg;
        };
        MintingDenom: {
            typeUrl: string;
            encode(message: _16.MintingDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.MintingDenom;
            fromPartial(object: Partial<_16.MintingDenom>): _16.MintingDenom;
            fromAmino(object: _16.MintingDenomAmino): _16.MintingDenom;
            toAmino(message: _16.MintingDenom): _16.MintingDenomAmino;
            fromAminoMsg(object: _16.MintingDenomAminoMsg): _16.MintingDenom;
            fromProtoMsg(message: _16.MintingDenomProtoMsg): _16.MintingDenom;
            toProto(message: _16.MintingDenom): Uint8Array;
            toProtoMsg(message: _16.MintingDenom): _16.MintingDenomProtoMsg;
        };
        Minters: {
            typeUrl: string;
            encode(message: _15.Minters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.Minters;
            fromPartial(object: Partial<_15.Minters>): _15.Minters;
            fromAmino(object: _15.MintersAmino): _15.Minters;
            toAmino(message: _15.Minters): _15.MintersAmino;
            fromAminoMsg(object: _15.MintersAminoMsg): _15.Minters;
            fromProtoMsg(message: _15.MintersProtoMsg): _15.Minters;
            toProto(message: _15.Minters): Uint8Array;
            toProtoMsg(message: _15.Minters): _15.MintersProtoMsg;
        };
        MinterController: {
            typeUrl: string;
            encode(message: _14.MinterController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.MinterController;
            fromPartial(object: Partial<_14.MinterController>): _14.MinterController;
            fromAmino(object: _14.MinterControllerAmino): _14.MinterController;
            toAmino(message: _14.MinterController): _14.MinterControllerAmino;
            fromAminoMsg(object: _14.MinterControllerAminoMsg): _14.MinterController;
            fromProtoMsg(message: _14.MinterControllerProtoMsg): _14.MinterController;
            toProto(message: _14.MinterController): Uint8Array;
            toProtoMsg(message: _14.MinterController): _14.MinterControllerProtoMsg;
        };
        MasterMinter: {
            typeUrl: string;
            encode(message: _13.MasterMinter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.MasterMinter;
            fromPartial(object: Partial<_13.MasterMinter>): _13.MasterMinter;
            fromAmino(object: _13.MasterMinterAmino): _13.MasterMinter;
            toAmino(message: _13.MasterMinter): _13.MasterMinterAmino;
            fromAminoMsg(object: _13.MasterMinterAminoMsg): _13.MasterMinter;
            fromProtoMsg(message: _13.MasterMinterProtoMsg): _13.MasterMinter;
            toProto(message: _13.MasterMinter): Uint8Array;
            toProtoMsg(message: _13.MasterMinter): _13.MasterMinterProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.GenesisState;
            fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
            toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
            fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
            fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
            toProto(message: _12.GenesisState): Uint8Array;
            toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
        };
        Blacklister: {
            typeUrl: string;
            encode(message: _11.Blacklister, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.Blacklister;
            fromPartial(object: Partial<_11.Blacklister>): _11.Blacklister;
            fromAmino(object: _11.BlacklisterAmino): _11.Blacklister;
            toAmino(message: _11.Blacklister): _11.BlacklisterAmino;
            fromAminoMsg(object: _11.BlacklisterAminoMsg): _11.Blacklister;
            fromProtoMsg(message: _11.BlacklisterProtoMsg): _11.Blacklister;
            toProto(message: _11.Blacklister): Uint8Array;
            toProtoMsg(message: _11.Blacklister): _11.BlacklisterProtoMsg;
        };
        Blacklisted: {
            typeUrl: string;
            encode(message: _10.Blacklisted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.Blacklisted;
            fromPartial(object: Partial<_10.Blacklisted>): _10.Blacklisted;
            fromAmino(object: _10.BlacklistedAmino): _10.Blacklisted;
            toAmino(message: _10.Blacklisted): _10.BlacklistedAmino;
            fromAminoMsg(object: _10.BlacklistedAminoMsg): _10.Blacklisted;
            fromProtoMsg(message: _10.BlacklistedProtoMsg): _10.Blacklisted;
            toProto(message: _10.Blacklisted): Uint8Array;
            toProtoMsg(message: _10.Blacklisted): _10.BlacklistedProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            noble: {
                forwarding: {
                    v1: _137.MsgClientImpl;
                };
                tokenfactory: _138.MsgClientImpl;
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
            noble: {
                globalfee: {
                    params(request?: _1.QueryParamsRequest): Promise<_1.QueryParamsResponse>;
                };
                forwarding: {
                    v1: {
                        address(request: _5.QueryAddress): Promise<_5.QueryAddressResponse>;
                        statsByChannel(request: _5.QueryStatsByChannel): Promise<_5.QueryStatsByChannelResponse>;
                    };
                };
                tariff: {
                    params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                };
                tokenfactory: {
                    params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                    blacklisted(request: _21.QueryGetBlacklistedRequest): Promise<_21.QueryGetBlacklistedResponse>;
                    blacklistedAll(request?: _21.QueryAllBlacklistedRequest): Promise<_21.QueryAllBlacklistedResponse>;
                    paused(request?: _21.QueryGetPausedRequest): Promise<_21.QueryGetPausedResponse>;
                    masterMinter(request?: _21.QueryGetMasterMinterRequest): Promise<_21.QueryGetMasterMinterResponse>;
                    minters(request: _21.QueryGetMintersRequest): Promise<_21.QueryGetMintersResponse>;
                    mintersAll(request?: _21.QueryAllMintersRequest): Promise<_21.QueryAllMintersResponse>;
                    pauser(request?: _21.QueryGetPauserRequest): Promise<_21.QueryGetPauserResponse>;
                    blacklister(request?: _21.QueryGetBlacklisterRequest): Promise<_21.QueryGetBlacklisterResponse>;
                    owner(request?: _21.QueryGetOwnerRequest): Promise<_21.QueryGetOwnerResponse>;
                    minterController(request: _21.QueryGetMinterControllerRequest): Promise<_21.QueryGetMinterControllerResponse>;
                    minterControllerAll(request?: _21.QueryAllMinterControllerRequest): Promise<_21.QueryAllMinterControllerResponse>;
                    mintingDenom(request?: _21.QueryGetMintingDenomRequest): Promise<_21.QueryGetMintingDenomResponse>;
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
            noble: {
                globalfee: _129.LCDQueryClient;
                forwarding: {
                    v1: _130.LCDQueryClient;
                };
                tariff: _131.LCDQueryClient;
                tokenfactory: _132.LCDQueryClient;
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
