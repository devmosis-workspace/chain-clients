import * as _0 from "./lien/genesis";
import * as _1 from "./lien/lien";
import * as _2 from "./swingset/genesis";
import * as _3 from "./swingset/msgs";
import * as _4 from "./swingset/query";
import * as _5 from "./swingset/swingset";
import * as _6 from "./vbank/genesis";
import * as _8 from "./vbank/query";
import * as _9 from "./vbank/vbank";
import * as _10 from "./vibc/msgs";
import * as _11 from "./vstorage/genesis";
import * as _12 from "./vstorage/query";
import * as _13 from "./vstorage/vstorage";
import * as _123 from "./swingset/query.lcd";
import * as _124 from "./vbank/query.lcd";
import * as _125 from "./vstorage/query.lcd";
import * as _126 from "./swingset/query.rpc.Query";
import * as _127 from "./vbank/query.rpc.Query";
import * as _128 from "./vstorage/query.rpc.Query";
import * as _129 from "./swingset/msgs.rpc.msg";
import * as _130 from "./vibc/msgs.rpc.msg";
export declare namespace agoric {
    const lien: {
        Lien: {
            encode(message: _1.Lien, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.Lien;
            fromPartial(object: Partial<_1.Lien>): _1.Lien;
        };
        GenesisState: {
            encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.GenesisState;
            fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
        };
        AccountLien: {
            encode(message: _0.AccountLien, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.AccountLien;
            fromPartial(object: Partial<_0.AccountLien>): _0.AccountLien;
        };
    };
    const swingset: {
        MsgClientImpl: typeof _129.MsgClientImpl;
        QueryClientImpl: typeof _126.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            egress(request: _4.QueryEgressRequest): Promise<_4.QueryEgressResponse>;
            mailbox(request: _4.QueryMailboxRequest): Promise<_4.QueryMailboxResponse>;
        };
        LCDQueryClient: typeof _123.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                installBundle(value: _3.MsgInstallBundle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deliverInbound(value: _3.MsgDeliverInbound): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                walletAction(value: _3.MsgWalletAction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                walletSpendAction(value: _3.MsgWalletSpendAction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                provision(value: _3.MsgProvision): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                installBundle(value: _3.MsgInstallBundle): {
                    typeUrl: string;
                    value: _3.MsgInstallBundle;
                };
                deliverInbound(value: _3.MsgDeliverInbound): {
                    typeUrl: string;
                    value: _3.MsgDeliverInbound;
                };
                walletAction(value: _3.MsgWalletAction): {
                    typeUrl: string;
                    value: _3.MsgWalletAction;
                };
                walletSpendAction(value: _3.MsgWalletSpendAction): {
                    typeUrl: string;
                    value: _3.MsgWalletSpendAction;
                };
                provision(value: _3.MsgProvision): {
                    typeUrl: string;
                    value: _3.MsgProvision;
                };
            };
            fromJSON: {
                installBundle(value: any): {
                    typeUrl: string;
                    value: _3.MsgInstallBundle;
                };
                deliverInbound(value: any): {
                    typeUrl: string;
                    value: _3.MsgDeliverInbound;
                };
                walletAction(value: any): {
                    typeUrl: string;
                    value: _3.MsgWalletAction;
                };
                walletSpendAction(value: any): {
                    typeUrl: string;
                    value: _3.MsgWalletSpendAction;
                };
                provision(value: any): {
                    typeUrl: string;
                    value: _3.MsgProvision;
                };
            };
            fromPartial: {
                installBundle(value: _3.MsgInstallBundle): {
                    typeUrl: string;
                    value: _3.MsgInstallBundle;
                };
                deliverInbound(value: _3.MsgDeliverInbound): {
                    typeUrl: string;
                    value: _3.MsgDeliverInbound;
                };
                walletAction(value: _3.MsgWalletAction): {
                    typeUrl: string;
                    value: _3.MsgWalletAction;
                };
                walletSpendAction(value: _3.MsgWalletSpendAction): {
                    typeUrl: string;
                    value: _3.MsgWalletSpendAction;
                };
                provision(value: _3.MsgProvision): {
                    typeUrl: string;
                    value: _3.MsgProvision;
                };
            };
        };
        AminoConverter: {
            "/agoric.swingset.MsgInstallBundle": {
                aminoType: string;
                toAmino: ({ bundle, submitter, compressedBundle, uncompressedSize }: _3.MsgInstallBundle) => {
                    bundle: string;
                    submitter: Uint8Array;
                    compressed_bundle: Uint8Array;
                    uncompressed_size: string;
                };
                fromAmino: ({ bundle, submitter, compressed_bundle, uncompressed_size }: {
                    bundle: string;
                    submitter: Uint8Array;
                    compressed_bundle: Uint8Array;
                    uncompressed_size: string;
                }) => _3.MsgInstallBundle;
            };
            "/agoric.swingset.MsgDeliverInbound": {
                aminoType: string;
                toAmino: ({ messages, nums, ack, submitter }: _3.MsgDeliverInbound) => {
                    messages: string[];
                    nums: string[];
                    ack: string;
                    submitter: Uint8Array;
                };
                fromAmino: ({ messages, nums, ack, submitter }: {
                    messages: string[];
                    nums: string[];
                    ack: string;
                    submitter: Uint8Array;
                }) => _3.MsgDeliverInbound;
            };
            "/agoric.swingset.MsgWalletAction": {
                aminoType: string;
                toAmino: ({ owner, action }: _3.MsgWalletAction) => {
                    owner: Uint8Array;
                    action: string;
                };
                fromAmino: ({ owner, action }: {
                    owner: Uint8Array;
                    action: string;
                }) => _3.MsgWalletAction;
            };
            "/agoric.swingset.MsgWalletSpendAction": {
                aminoType: string;
                toAmino: ({ owner, spendAction }: _3.MsgWalletSpendAction) => {
                    owner: Uint8Array;
                    spend_action: string;
                };
                fromAmino: ({ owner, spend_action }: {
                    owner: Uint8Array;
                    spend_action: string;
                }) => _3.MsgWalletSpendAction;
            };
            "/agoric.swingset.MsgProvision": {
                aminoType: string;
                toAmino: ({ nickname, address, powerFlags, submitter }: _3.MsgProvision) => {
                    nickname: string;
                    address: Uint8Array;
                    power_flags: string[];
                    submitter: Uint8Array;
                };
                fromAmino: ({ nickname, address, power_flags, submitter }: {
                    nickname: string;
                    address: Uint8Array;
                    power_flags: string[];
                    submitter: Uint8Array;
                }) => _3.MsgProvision;
            };
        };
        CoreEvalProposal: {
            encode(message: _5.CoreEvalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.CoreEvalProposal;
            fromPartial(object: Partial<_5.CoreEvalProposal>): _5.CoreEvalProposal;
        };
        CoreEval: {
            encode(message: _5.CoreEval, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.CoreEval;
            fromPartial(object: Partial<_5.CoreEval>): _5.CoreEval;
        };
        Params: {
            encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Params;
            fromPartial(object: Partial<_5.Params>): _5.Params;
        };
        State: {
            encode(message: _5.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.State;
            fromPartial(object: Partial<_5.State>): _5.State;
        };
        StringBeans: {
            encode(message: _5.StringBeans, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.StringBeans;
            fromPartial(object: Partial<_5.StringBeans>): _5.StringBeans;
        };
        PowerFlagFee: {
            encode(message: _5.PowerFlagFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.PowerFlagFee;
            fromPartial(object: Partial<_5.PowerFlagFee>): _5.PowerFlagFee;
        };
        QueueSize: {
            encode(message: _5.QueueSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.QueueSize;
            fromPartial(object: Partial<_5.QueueSize>): _5.QueueSize;
        };
        Egress: {
            encode(message: _5.Egress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Egress;
            fromPartial(object: Partial<_5.Egress>): _5.Egress;
        };
        ExtensionSnapshotterArtifactPayload: {
            encode(message: _5.ExtensionSnapshotterArtifactPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.ExtensionSnapshotterArtifactPayload;
            fromPartial(object: Partial<_5.ExtensionSnapshotterArtifactPayload>): _5.ExtensionSnapshotterArtifactPayload;
        };
        QueryParamsRequest: {
            encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _4.QueryParamsRequest;
            fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryParamsResponse;
            fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
        };
        QueryEgressRequest: {
            encode(message: _4.QueryEgressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryEgressRequest;
            fromPartial(object: Partial<_4.QueryEgressRequest>): _4.QueryEgressRequest;
        };
        QueryEgressResponse: {
            encode(message: _4.QueryEgressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryEgressResponse;
            fromPartial(object: Partial<_4.QueryEgressResponse>): _4.QueryEgressResponse;
        };
        QueryMailboxRequest: {
            encode(message: _4.QueryMailboxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryMailboxRequest;
            fromPartial(object: Partial<_4.QueryMailboxRequest>): _4.QueryMailboxRequest;
        };
        QueryMailboxResponse: {
            encode(message: _4.QueryMailboxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.QueryMailboxResponse;
            fromPartial(object: Partial<_4.QueryMailboxResponse>): _4.QueryMailboxResponse;
        };
        MsgDeliverInbound: {
            encode(message: _3.MsgDeliverInbound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.MsgDeliverInbound;
            fromPartial(object: Partial<_3.MsgDeliverInbound>): _3.MsgDeliverInbound;
        };
        MsgDeliverInboundResponse: {
            encode(_: _3.MsgDeliverInboundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _3.MsgDeliverInboundResponse;
            fromPartial(_: Partial<_3.MsgDeliverInboundResponse>): _3.MsgDeliverInboundResponse;
        };
        MsgWalletAction: {
            encode(message: _3.MsgWalletAction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.MsgWalletAction;
            fromPartial(object: Partial<_3.MsgWalletAction>): _3.MsgWalletAction;
        };
        MsgWalletActionResponse: {
            encode(_: _3.MsgWalletActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _3.MsgWalletActionResponse;
            fromPartial(_: Partial<_3.MsgWalletActionResponse>): _3.MsgWalletActionResponse;
        };
        MsgWalletSpendAction: {
            encode(message: _3.MsgWalletSpendAction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.MsgWalletSpendAction;
            fromPartial(object: Partial<_3.MsgWalletSpendAction>): _3.MsgWalletSpendAction;
        };
        MsgWalletSpendActionResponse: {
            encode(_: _3.MsgWalletSpendActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _3.MsgWalletSpendActionResponse;
            fromPartial(_: Partial<_3.MsgWalletSpendActionResponse>): _3.MsgWalletSpendActionResponse;
        };
        MsgProvision: {
            encode(message: _3.MsgProvision, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.MsgProvision;
            fromPartial(object: Partial<_3.MsgProvision>): _3.MsgProvision;
        };
        MsgProvisionResponse: {
            encode(_: _3.MsgProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _3.MsgProvisionResponse;
            fromPartial(_: Partial<_3.MsgProvisionResponse>): _3.MsgProvisionResponse;
        };
        MsgInstallBundle: {
            encode(message: _3.MsgInstallBundle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.MsgInstallBundle;
            fromPartial(object: Partial<_3.MsgInstallBundle>): _3.MsgInstallBundle;
        };
        MsgInstallBundleResponse: {
            encode(_: _3.MsgInstallBundleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _3.MsgInstallBundleResponse;
            fromPartial(_: Partial<_3.MsgInstallBundleResponse>): _3.MsgInstallBundleResponse;
        };
        GenesisState: {
            encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.GenesisState;
            fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
        };
    };
    const vbank: {
        QueryClientImpl: typeof _127.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
            state(request?: _8.QueryStateRequest): Promise<_8.QueryStateResponse>;
        };
        LCDQueryClient: typeof _124.LCDQueryClient;
        Params: {
            encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.Params;
            fromPartial(object: Partial<_9.Params>): _9.Params;
        };
        State: {
            encode(message: _9.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.State;
            fromPartial(object: Partial<_9.State>): _9.State;
        };
        QueryParamsRequest: {
            encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _8.QueryParamsRequest;
            fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _8.QueryParamsResponse;
            fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
        };
        QueryStateRequest: {
            encode(_: _8.QueryStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _8.QueryStateRequest;
            fromPartial(_: Partial<_8.QueryStateRequest>): _8.QueryStateRequest;
        };
        QueryStateResponse: {
            encode(message: _8.QueryStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _8.QueryStateResponse;
            fromPartial(object: Partial<_8.QueryStateResponse>): _8.QueryStateResponse;
        };
        GenesisState: {
            encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.GenesisState;
            fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
        };
    };
    const vibc: {
        MsgClientImpl: typeof _130.MsgClientImpl;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                sendPacket(value: _10.MsgSendPacket): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                sendPacket(value: _10.MsgSendPacket): {
                    typeUrl: string;
                    value: _10.MsgSendPacket;
                };
            };
            fromJSON: {
                sendPacket(value: any): {
                    typeUrl: string;
                    value: _10.MsgSendPacket;
                };
            };
            fromPartial: {
                sendPacket(value: _10.MsgSendPacket): {
                    typeUrl: string;
                    value: _10.MsgSendPacket;
                };
            };
        };
        AminoConverter: {
            "/agoric.vibc.MsgSendPacket": {
                aminoType: string;
                toAmino: ({ packet, sender }: _10.MsgSendPacket) => {
                    packet: {
                        sequence: string;
                        source_port: string;
                        source_channel: string;
                        destination_port: string;
                        destination_channel: string;
                        data: Uint8Array;
                        timeout_height: import("../helpers").AminoHeight;
                        timeout_timestamp: string;
                    };
                    sender: Uint8Array;
                };
                fromAmino: ({ packet, sender }: {
                    packet: {
                        sequence: string;
                        source_port: string;
                        source_channel: string;
                        destination_port: string;
                        destination_channel: string;
                        data: Uint8Array;
                        timeout_height: import("../helpers").AminoHeight;
                        timeout_timestamp: string;
                    };
                    sender: Uint8Array;
                }) => _10.MsgSendPacket;
            };
        };
        MsgSendPacket: {
            encode(message: _10.MsgSendPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _10.MsgSendPacket;
            fromPartial(object: Partial<_10.MsgSendPacket>): _10.MsgSendPacket;
        };
        MsgSendPacketResponse: {
            encode(_: _10.MsgSendPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _10.MsgSendPacketResponse;
            fromPartial(_: Partial<_10.MsgSendPacketResponse>): _10.MsgSendPacketResponse;
        };
    };
    const vstorage: {
        QueryClientImpl: typeof _128.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            data(request: _12.QueryDataRequest): Promise<_12.QueryDataResponse>;
            children(request: _12.QueryChildrenRequest): Promise<_12.QueryChildrenResponse>;
        };
        LCDQueryClient: typeof _125.LCDQueryClient;
        Data: {
            encode(message: _13.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _13.Data;
            fromPartial(object: Partial<_13.Data>): _13.Data;
        };
        Children: {
            encode(message: _13.Children, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _13.Children;
            fromPartial(object: Partial<_13.Children>): _13.Children;
        };
        QueryDataRequest: {
            encode(message: _12.QueryDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.QueryDataRequest;
            fromPartial(object: Partial<_12.QueryDataRequest>): _12.QueryDataRequest;
        };
        QueryDataResponse: {
            encode(message: _12.QueryDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.QueryDataResponse;
            fromPartial(object: Partial<_12.QueryDataResponse>): _12.QueryDataResponse;
        };
        QueryChildrenRequest: {
            encode(message: _12.QueryChildrenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.QueryChildrenRequest;
            fromPartial(object: Partial<_12.QueryChildrenRequest>): _12.QueryChildrenRequest;
        };
        QueryChildrenResponse: {
            encode(message: _12.QueryChildrenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.QueryChildrenResponse;
            fromPartial(object: Partial<_12.QueryChildrenResponse>): _12.QueryChildrenResponse;
        };
        GenesisState: {
            encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.GenesisState;
            fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
        };
        DataEntry: {
            encode(message: _11.DataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.DataEntry;
            fromPartial(object: Partial<_11.DataEntry>): _11.DataEntry;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            agoric: {
                swingset: _129.MsgClientImpl;
                vibc: _130.MsgClientImpl;
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
            agoric: {
                swingset: {
                    params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                    egress(request: _4.QueryEgressRequest): Promise<_4.QueryEgressResponse>;
                    mailbox(request: _4.QueryMailboxRequest): Promise<_4.QueryMailboxResponse>;
                };
                vbank: {
                    params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                    state(request?: _8.QueryStateRequest): Promise<_8.QueryStateResponse>;
                };
                vstorage: {
                    data(request: _12.QueryDataRequest): Promise<_12.QueryDataResponse>;
                    children(request: _12.QueryChildrenRequest): Promise<_12.QueryChildrenResponse>;
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
            agoric: {
                swingset: _123.LCDQueryClient;
                vbank: _124.LCDQueryClient;
                vstorage: _125.LCDQueryClient;
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
