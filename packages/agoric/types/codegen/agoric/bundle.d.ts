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
            typeUrl: string;
            encode(message: _1.Lien, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _1.Lien;
            fromPartial(object: Partial<_1.Lien>): _1.Lien;
            fromAmino(object: _1.LienAmino): _1.Lien;
            toAmino(message: _1.Lien): _1.LienAmino;
            fromAminoMsg(object: _1.LienAminoMsg): _1.Lien;
            fromProtoMsg(message: _1.LienProtoMsg): _1.Lien;
            toProto(message: _1.Lien): Uint8Array;
            toProtoMsg(message: _1.Lien): _1.LienProtoMsg;
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
        AccountLien: {
            typeUrl: string;
            encode(message: _0.AccountLien, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.AccountLien;
            fromPartial(object: Partial<_0.AccountLien>): _0.AccountLien;
            fromAmino(object: _0.AccountLienAmino): _0.AccountLien;
            toAmino(message: _0.AccountLien): _0.AccountLienAmino;
            fromAminoMsg(object: _0.AccountLienAminoMsg): _0.AccountLien;
            fromProtoMsg(message: _0.AccountLienProtoMsg): _0.AccountLien;
            toProto(message: _0.AccountLien): Uint8Array;
            toProtoMsg(message: _0.AccountLien): _0.AccountLienProtoMsg;
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
                toAmino: (message: _3.MsgInstallBundle) => _3.MsgInstallBundleAmino;
                fromAmino: (object: _3.MsgInstallBundleAmino) => _3.MsgInstallBundle;
            };
            "/agoric.swingset.MsgDeliverInbound": {
                aminoType: string;
                toAmino: (message: _3.MsgDeliverInbound) => _3.MsgDeliverInboundAmino;
                fromAmino: (object: _3.MsgDeliverInboundAmino) => _3.MsgDeliverInbound;
            };
            "/agoric.swingset.MsgWalletAction": {
                aminoType: string;
                toAmino: (message: _3.MsgWalletAction) => _3.MsgWalletActionAmino;
                fromAmino: (object: _3.MsgWalletActionAmino) => _3.MsgWalletAction;
            };
            "/agoric.swingset.MsgWalletSpendAction": {
                aminoType: string;
                toAmino: (message: _3.MsgWalletSpendAction) => _3.MsgWalletSpendActionAmino;
                fromAmino: (object: _3.MsgWalletSpendActionAmino) => _3.MsgWalletSpendAction;
            };
            "/agoric.swingset.MsgProvision": {
                aminoType: string;
                toAmino: (message: _3.MsgProvision) => _3.MsgProvisionAmino;
                fromAmino: (object: _3.MsgProvisionAmino) => _3.MsgProvision;
            };
        };
        CoreEvalProposal: {
            typeUrl: string;
            encode(message: _5.CoreEvalProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.CoreEvalProposal;
            fromPartial(object: Partial<_5.CoreEvalProposal>): _5.CoreEvalProposal;
            fromAmino(object: _5.CoreEvalProposalAmino): _5.CoreEvalProposal;
            toAmino(message: _5.CoreEvalProposal): _5.CoreEvalProposalAmino;
            fromAminoMsg(object: _5.CoreEvalProposalAminoMsg): _5.CoreEvalProposal;
            fromProtoMsg(message: _5.CoreEvalProposalProtoMsg): _5.CoreEvalProposal;
            toProto(message: _5.CoreEvalProposal): Uint8Array;
            toProtoMsg(message: _5.CoreEvalProposal): _5.CoreEvalProposalProtoMsg;
        };
        CoreEval: {
            typeUrl: string;
            encode(message: _5.CoreEval, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.CoreEval;
            fromPartial(object: Partial<_5.CoreEval>): _5.CoreEval;
            fromAmino(object: _5.CoreEvalAmino): _5.CoreEval;
            toAmino(message: _5.CoreEval): _5.CoreEvalAmino;
            fromAminoMsg(object: _5.CoreEvalAminoMsg): _5.CoreEval;
            fromProtoMsg(message: _5.CoreEvalProtoMsg): _5.CoreEval;
            toProto(message: _5.CoreEval): Uint8Array;
            toProtoMsg(message: _5.CoreEval): _5.CoreEvalProtoMsg;
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
        State: {
            typeUrl: string;
            encode(message: _5.State, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.State;
            fromPartial(object: Partial<_5.State>): _5.State;
            fromAmino(object: _5.StateAmino): _5.State;
            toAmino(message: _5.State): _5.StateAmino;
            fromAminoMsg(object: _5.StateAminoMsg): _5.State;
            fromProtoMsg(message: _5.StateProtoMsg): _5.State;
            toProto(message: _5.State): Uint8Array;
            toProtoMsg(message: _5.State): _5.StateProtoMsg;
        };
        StringBeans: {
            typeUrl: string;
            encode(message: _5.StringBeans, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.StringBeans;
            fromPartial(object: Partial<_5.StringBeans>): _5.StringBeans;
            fromAmino(object: _5.StringBeansAmino): _5.StringBeans;
            toAmino(message: _5.StringBeans): _5.StringBeansAmino;
            fromAminoMsg(object: _5.StringBeansAminoMsg): _5.StringBeans;
            fromProtoMsg(message: _5.StringBeansProtoMsg): _5.StringBeans;
            toProto(message: _5.StringBeans): Uint8Array;
            toProtoMsg(message: _5.StringBeans): _5.StringBeansProtoMsg;
        };
        PowerFlagFee: {
            typeUrl: string;
            encode(message: _5.PowerFlagFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.PowerFlagFee;
            fromPartial(object: Partial<_5.PowerFlagFee>): _5.PowerFlagFee;
            fromAmino(object: _5.PowerFlagFeeAmino): _5.PowerFlagFee;
            toAmino(message: _5.PowerFlagFee): _5.PowerFlagFeeAmino;
            fromAminoMsg(object: _5.PowerFlagFeeAminoMsg): _5.PowerFlagFee;
            fromProtoMsg(message: _5.PowerFlagFeeProtoMsg): _5.PowerFlagFee;
            toProto(message: _5.PowerFlagFee): Uint8Array;
            toProtoMsg(message: _5.PowerFlagFee): _5.PowerFlagFeeProtoMsg;
        };
        QueueSize: {
            typeUrl: string;
            encode(message: _5.QueueSize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.QueueSize;
            fromPartial(object: Partial<_5.QueueSize>): _5.QueueSize;
            fromAmino(object: _5.QueueSizeAmino): _5.QueueSize;
            toAmino(message: _5.QueueSize): _5.QueueSizeAmino;
            fromAminoMsg(object: _5.QueueSizeAminoMsg): _5.QueueSize;
            fromProtoMsg(message: _5.QueueSizeProtoMsg): _5.QueueSize;
            toProto(message: _5.QueueSize): Uint8Array;
            toProtoMsg(message: _5.QueueSize): _5.QueueSizeProtoMsg;
        };
        Egress: {
            typeUrl: string;
            encode(message: _5.Egress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Egress;
            fromPartial(object: Partial<_5.Egress>): _5.Egress;
            fromAmino(object: _5.EgressAmino): _5.Egress;
            toAmino(message: _5.Egress): _5.EgressAmino;
            fromAminoMsg(object: _5.EgressAminoMsg): _5.Egress;
            fromProtoMsg(message: _5.EgressProtoMsg): _5.Egress;
            toProto(message: _5.Egress): Uint8Array;
            toProtoMsg(message: _5.Egress): _5.EgressProtoMsg;
        };
        ExtensionSnapshotterArtifactPayload: {
            typeUrl: string;
            encode(message: _5.ExtensionSnapshotterArtifactPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.ExtensionSnapshotterArtifactPayload;
            fromPartial(object: Partial<_5.ExtensionSnapshotterArtifactPayload>): _5.ExtensionSnapshotterArtifactPayload;
            fromAmino(object: _5.ExtensionSnapshotterArtifactPayloadAmino): _5.ExtensionSnapshotterArtifactPayload;
            toAmino(message: _5.ExtensionSnapshotterArtifactPayload): _5.ExtensionSnapshotterArtifactPayloadAmino;
            fromAminoMsg(object: _5.ExtensionSnapshotterArtifactPayloadAminoMsg): _5.ExtensionSnapshotterArtifactPayload;
            fromProtoMsg(message: _5.ExtensionSnapshotterArtifactPayloadProtoMsg): _5.ExtensionSnapshotterArtifactPayload;
            toProto(message: _5.ExtensionSnapshotterArtifactPayload): Uint8Array;
            toProtoMsg(message: _5.ExtensionSnapshotterArtifactPayload): _5.ExtensionSnapshotterArtifactPayloadProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _4.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.QueryParamsRequest;
            fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
            toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
            fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
            fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
            toProto(message: _4.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _4.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryParamsResponse;
            fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
            toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
            fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
            fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
            toProto(message: _4.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
        };
        QueryEgressRequest: {
            typeUrl: string;
            encode(message: _4.QueryEgressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryEgressRequest;
            fromPartial(object: Partial<_4.QueryEgressRequest>): _4.QueryEgressRequest;
            fromAmino(object: _4.QueryEgressRequestAmino): _4.QueryEgressRequest;
            toAmino(message: _4.QueryEgressRequest): _4.QueryEgressRequestAmino;
            fromAminoMsg(object: _4.QueryEgressRequestAminoMsg): _4.QueryEgressRequest;
            fromProtoMsg(message: _4.QueryEgressRequestProtoMsg): _4.QueryEgressRequest;
            toProto(message: _4.QueryEgressRequest): Uint8Array;
            toProtoMsg(message: _4.QueryEgressRequest): _4.QueryEgressRequestProtoMsg;
        };
        QueryEgressResponse: {
            typeUrl: string;
            encode(message: _4.QueryEgressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryEgressResponse;
            fromPartial(object: Partial<_4.QueryEgressResponse>): _4.QueryEgressResponse;
            fromAmino(object: _4.QueryEgressResponseAmino): _4.QueryEgressResponse;
            toAmino(message: _4.QueryEgressResponse): _4.QueryEgressResponseAmino;
            fromAminoMsg(object: _4.QueryEgressResponseAminoMsg): _4.QueryEgressResponse;
            fromProtoMsg(message: _4.QueryEgressResponseProtoMsg): _4.QueryEgressResponse;
            toProto(message: _4.QueryEgressResponse): Uint8Array;
            toProtoMsg(message: _4.QueryEgressResponse): _4.QueryEgressResponseProtoMsg;
        };
        QueryMailboxRequest: {
            typeUrl: string;
            encode(message: _4.QueryMailboxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryMailboxRequest;
            fromPartial(object: Partial<_4.QueryMailboxRequest>): _4.QueryMailboxRequest;
            fromAmino(object: _4.QueryMailboxRequestAmino): _4.QueryMailboxRequest;
            toAmino(message: _4.QueryMailboxRequest): _4.QueryMailboxRequestAmino;
            fromAminoMsg(object: _4.QueryMailboxRequestAminoMsg): _4.QueryMailboxRequest;
            fromProtoMsg(message: _4.QueryMailboxRequestProtoMsg): _4.QueryMailboxRequest;
            toProto(message: _4.QueryMailboxRequest): Uint8Array;
            toProtoMsg(message: _4.QueryMailboxRequest): _4.QueryMailboxRequestProtoMsg;
        };
        QueryMailboxResponse: {
            typeUrl: string;
            encode(message: _4.QueryMailboxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.QueryMailboxResponse;
            fromPartial(object: Partial<_4.QueryMailboxResponse>): _4.QueryMailboxResponse;
            fromAmino(object: _4.QueryMailboxResponseAmino): _4.QueryMailboxResponse;
            toAmino(message: _4.QueryMailboxResponse): _4.QueryMailboxResponseAmino;
            fromAminoMsg(object: _4.QueryMailboxResponseAminoMsg): _4.QueryMailboxResponse;
            fromProtoMsg(message: _4.QueryMailboxResponseProtoMsg): _4.QueryMailboxResponse;
            toProto(message: _4.QueryMailboxResponse): Uint8Array;
            toProtoMsg(message: _4.QueryMailboxResponse): _4.QueryMailboxResponseProtoMsg;
        };
        MsgDeliverInbound: {
            typeUrl: string;
            encode(message: _3.MsgDeliverInbound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgDeliverInbound;
            fromPartial(object: Partial<_3.MsgDeliverInbound>): _3.MsgDeliverInbound;
            fromAmino(object: _3.MsgDeliverInboundAmino): _3.MsgDeliverInbound;
            toAmino(message: _3.MsgDeliverInbound): _3.MsgDeliverInboundAmino;
            fromAminoMsg(object: _3.MsgDeliverInboundAminoMsg): _3.MsgDeliverInbound;
            fromProtoMsg(message: _3.MsgDeliverInboundProtoMsg): _3.MsgDeliverInbound;
            toProto(message: _3.MsgDeliverInbound): Uint8Array;
            toProtoMsg(message: _3.MsgDeliverInbound): _3.MsgDeliverInboundProtoMsg;
        };
        MsgDeliverInboundResponse: {
            typeUrl: string;
            encode(_: _3.MsgDeliverInboundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgDeliverInboundResponse;
            fromPartial(_: Partial<_3.MsgDeliverInboundResponse>): _3.MsgDeliverInboundResponse;
            fromAmino(_: _3.MsgDeliverInboundResponseAmino): _3.MsgDeliverInboundResponse;
            toAmino(_: _3.MsgDeliverInboundResponse): _3.MsgDeliverInboundResponseAmino;
            fromAminoMsg(object: _3.MsgDeliverInboundResponseAminoMsg): _3.MsgDeliverInboundResponse;
            fromProtoMsg(message: _3.MsgDeliverInboundResponseProtoMsg): _3.MsgDeliverInboundResponse;
            toProto(message: _3.MsgDeliverInboundResponse): Uint8Array;
            toProtoMsg(message: _3.MsgDeliverInboundResponse): _3.MsgDeliverInboundResponseProtoMsg;
        };
        MsgWalletAction: {
            typeUrl: string;
            encode(message: _3.MsgWalletAction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgWalletAction;
            fromPartial(object: Partial<_3.MsgWalletAction>): _3.MsgWalletAction;
            fromAmino(object: _3.MsgWalletActionAmino): _3.MsgWalletAction;
            toAmino(message: _3.MsgWalletAction): _3.MsgWalletActionAmino;
            fromAminoMsg(object: _3.MsgWalletActionAminoMsg): _3.MsgWalletAction;
            fromProtoMsg(message: _3.MsgWalletActionProtoMsg): _3.MsgWalletAction;
            toProto(message: _3.MsgWalletAction): Uint8Array;
            toProtoMsg(message: _3.MsgWalletAction): _3.MsgWalletActionProtoMsg;
        };
        MsgWalletActionResponse: {
            typeUrl: string;
            encode(_: _3.MsgWalletActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgWalletActionResponse;
            fromPartial(_: Partial<_3.MsgWalletActionResponse>): _3.MsgWalletActionResponse;
            fromAmino(_: _3.MsgWalletActionResponseAmino): _3.MsgWalletActionResponse;
            toAmino(_: _3.MsgWalletActionResponse): _3.MsgWalletActionResponseAmino;
            fromAminoMsg(object: _3.MsgWalletActionResponseAminoMsg): _3.MsgWalletActionResponse;
            fromProtoMsg(message: _3.MsgWalletActionResponseProtoMsg): _3.MsgWalletActionResponse;
            toProto(message: _3.MsgWalletActionResponse): Uint8Array;
            toProtoMsg(message: _3.MsgWalletActionResponse): _3.MsgWalletActionResponseProtoMsg;
        };
        MsgWalletSpendAction: {
            typeUrl: string;
            encode(message: _3.MsgWalletSpendAction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgWalletSpendAction;
            fromPartial(object: Partial<_3.MsgWalletSpendAction>): _3.MsgWalletSpendAction;
            fromAmino(object: _3.MsgWalletSpendActionAmino): _3.MsgWalletSpendAction;
            toAmino(message: _3.MsgWalletSpendAction): _3.MsgWalletSpendActionAmino;
            fromAminoMsg(object: _3.MsgWalletSpendActionAminoMsg): _3.MsgWalletSpendAction;
            fromProtoMsg(message: _3.MsgWalletSpendActionProtoMsg): _3.MsgWalletSpendAction;
            toProto(message: _3.MsgWalletSpendAction): Uint8Array;
            toProtoMsg(message: _3.MsgWalletSpendAction): _3.MsgWalletSpendActionProtoMsg;
        };
        MsgWalletSpendActionResponse: {
            typeUrl: string;
            encode(_: _3.MsgWalletSpendActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgWalletSpendActionResponse;
            fromPartial(_: Partial<_3.MsgWalletSpendActionResponse>): _3.MsgWalletSpendActionResponse;
            fromAmino(_: _3.MsgWalletSpendActionResponseAmino): _3.MsgWalletSpendActionResponse;
            toAmino(_: _3.MsgWalletSpendActionResponse): _3.MsgWalletSpendActionResponseAmino;
            fromAminoMsg(object: _3.MsgWalletSpendActionResponseAminoMsg): _3.MsgWalletSpendActionResponse;
            fromProtoMsg(message: _3.MsgWalletSpendActionResponseProtoMsg): _3.MsgWalletSpendActionResponse;
            toProto(message: _3.MsgWalletSpendActionResponse): Uint8Array;
            toProtoMsg(message: _3.MsgWalletSpendActionResponse): _3.MsgWalletSpendActionResponseProtoMsg;
        };
        MsgProvision: {
            typeUrl: string;
            encode(message: _3.MsgProvision, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgProvision;
            fromPartial(object: Partial<_3.MsgProvision>): _3.MsgProvision;
            fromAmino(object: _3.MsgProvisionAmino): _3.MsgProvision;
            toAmino(message: _3.MsgProvision): _3.MsgProvisionAmino;
            fromAminoMsg(object: _3.MsgProvisionAminoMsg): _3.MsgProvision;
            fromProtoMsg(message: _3.MsgProvisionProtoMsg): _3.MsgProvision;
            toProto(message: _3.MsgProvision): Uint8Array;
            toProtoMsg(message: _3.MsgProvision): _3.MsgProvisionProtoMsg;
        };
        MsgProvisionResponse: {
            typeUrl: string;
            encode(_: _3.MsgProvisionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgProvisionResponse;
            fromPartial(_: Partial<_3.MsgProvisionResponse>): _3.MsgProvisionResponse;
            fromAmino(_: _3.MsgProvisionResponseAmino): _3.MsgProvisionResponse;
            toAmino(_: _3.MsgProvisionResponse): _3.MsgProvisionResponseAmino;
            fromAminoMsg(object: _3.MsgProvisionResponseAminoMsg): _3.MsgProvisionResponse;
            fromProtoMsg(message: _3.MsgProvisionResponseProtoMsg): _3.MsgProvisionResponse;
            toProto(message: _3.MsgProvisionResponse): Uint8Array;
            toProtoMsg(message: _3.MsgProvisionResponse): _3.MsgProvisionResponseProtoMsg;
        };
        MsgInstallBundle: {
            typeUrl: string;
            encode(message: _3.MsgInstallBundle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.MsgInstallBundle;
            fromPartial(object: Partial<_3.MsgInstallBundle>): _3.MsgInstallBundle;
            fromAmino(object: _3.MsgInstallBundleAmino): _3.MsgInstallBundle;
            toAmino(message: _3.MsgInstallBundle): _3.MsgInstallBundleAmino;
            fromAminoMsg(object: _3.MsgInstallBundleAminoMsg): _3.MsgInstallBundle;
            fromProtoMsg(message: _3.MsgInstallBundleProtoMsg): _3.MsgInstallBundle;
            toProto(message: _3.MsgInstallBundle): Uint8Array;
            toProtoMsg(message: _3.MsgInstallBundle): _3.MsgInstallBundleProtoMsg;
        };
        MsgInstallBundleResponse: {
            typeUrl: string;
            encode(_: _3.MsgInstallBundleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.MsgInstallBundleResponse;
            fromPartial(_: Partial<_3.MsgInstallBundleResponse>): _3.MsgInstallBundleResponse;
            fromAmino(_: _3.MsgInstallBundleResponseAmino): _3.MsgInstallBundleResponse;
            toAmino(_: _3.MsgInstallBundleResponse): _3.MsgInstallBundleResponseAmino;
            fromAminoMsg(object: _3.MsgInstallBundleResponseAminoMsg): _3.MsgInstallBundleResponse;
            fromProtoMsg(message: _3.MsgInstallBundleResponseProtoMsg): _3.MsgInstallBundleResponse;
            toProto(message: _3.MsgInstallBundleResponse): Uint8Array;
            toProtoMsg(message: _3.MsgInstallBundleResponse): _3.MsgInstallBundleResponseProtoMsg;
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
    };
    const vbank: {
        QueryClientImpl: typeof _127.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
            state(request?: _8.QueryStateRequest): Promise<_8.QueryStateResponse>;
        };
        LCDQueryClient: typeof _124.LCDQueryClient;
        Params: {
            typeUrl: string;
            encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.Params;
            fromPartial(object: Partial<_9.Params>): _9.Params;
            fromAmino(object: _9.ParamsAmino): _9.Params;
            toAmino(message: _9.Params): _9.ParamsAmino;
            fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
            fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
            toProto(message: _9.Params): Uint8Array;
            toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
        };
        State: {
            typeUrl: string;
            encode(message: _9.State, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.State;
            fromPartial(object: Partial<_9.State>): _9.State;
            fromAmino(object: _9.StateAmino): _9.State;
            toAmino(message: _9.State): _9.StateAmino;
            fromAminoMsg(object: _9.StateAminoMsg): _9.State;
            fromProtoMsg(message: _9.StateProtoMsg): _9.State;
            toProto(message: _9.State): Uint8Array;
            toProtoMsg(message: _9.State): _9.StateProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _8.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _8.QueryParamsRequest;
            fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
            fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
            toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
            fromAminoMsg(object: _8.QueryParamsRequestAminoMsg): _8.QueryParamsRequest;
            fromProtoMsg(message: _8.QueryParamsRequestProtoMsg): _8.QueryParamsRequest;
            toProto(message: _8.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _8.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.QueryParamsResponse;
            fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
            fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
            toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
            fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
            fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
            toProto(message: _8.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
        };
        QueryStateRequest: {
            typeUrl: string;
            encode(_: _8.QueryStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _8.QueryStateRequest;
            fromPartial(_: Partial<_8.QueryStateRequest>): _8.QueryStateRequest;
            fromAmino(_: _8.QueryStateRequestAmino): _8.QueryStateRequest;
            toAmino(_: _8.QueryStateRequest): _8.QueryStateRequestAmino;
            fromAminoMsg(object: _8.QueryStateRequestAminoMsg): _8.QueryStateRequest;
            fromProtoMsg(message: _8.QueryStateRequestProtoMsg): _8.QueryStateRequest;
            toProto(message: _8.QueryStateRequest): Uint8Array;
            toProtoMsg(message: _8.QueryStateRequest): _8.QueryStateRequestProtoMsg;
        };
        QueryStateResponse: {
            typeUrl: string;
            encode(message: _8.QueryStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.QueryStateResponse;
            fromPartial(object: Partial<_8.QueryStateResponse>): _8.QueryStateResponse;
            fromAmino(object: _8.QueryStateResponseAmino): _8.QueryStateResponse;
            toAmino(message: _8.QueryStateResponse): _8.QueryStateResponseAmino;
            fromAminoMsg(object: _8.QueryStateResponseAminoMsg): _8.QueryStateResponse;
            fromProtoMsg(message: _8.QueryStateResponseProtoMsg): _8.QueryStateResponse;
            toProto(message: _8.QueryStateResponse): Uint8Array;
            toProtoMsg(message: _8.QueryStateResponse): _8.QueryStateResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _6.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.GenesisState;
            fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
            fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
            toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
            fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
            fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
            toProto(message: _6.GenesisState): Uint8Array;
            toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
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
                toAmino: (message: _10.MsgSendPacket) => _10.MsgSendPacketAmino;
                fromAmino: (object: _10.MsgSendPacketAmino) => _10.MsgSendPacket;
            };
        };
        MsgSendPacket: {
            typeUrl: string;
            encode(message: _10.MsgSendPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.MsgSendPacket;
            fromPartial(object: Partial<_10.MsgSendPacket>): _10.MsgSendPacket;
            fromAmino(object: _10.MsgSendPacketAmino): _10.MsgSendPacket;
            toAmino(message: _10.MsgSendPacket): _10.MsgSendPacketAmino;
            fromAminoMsg(object: _10.MsgSendPacketAminoMsg): _10.MsgSendPacket;
            fromProtoMsg(message: _10.MsgSendPacketProtoMsg): _10.MsgSendPacket;
            toProto(message: _10.MsgSendPacket): Uint8Array;
            toProtoMsg(message: _10.MsgSendPacket): _10.MsgSendPacketProtoMsg;
        };
        MsgSendPacketResponse: {
            typeUrl: string;
            encode(_: _10.MsgSendPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.MsgSendPacketResponse;
            fromPartial(_: Partial<_10.MsgSendPacketResponse>): _10.MsgSendPacketResponse;
            fromAmino(_: _10.MsgSendPacketResponseAmino): _10.MsgSendPacketResponse;
            toAmino(_: _10.MsgSendPacketResponse): _10.MsgSendPacketResponseAmino;
            fromAminoMsg(object: _10.MsgSendPacketResponseAminoMsg): _10.MsgSendPacketResponse;
            fromProtoMsg(message: _10.MsgSendPacketResponseProtoMsg): _10.MsgSendPacketResponse;
            toProto(message: _10.MsgSendPacketResponse): Uint8Array;
            toProtoMsg(message: _10.MsgSendPacketResponse): _10.MsgSendPacketResponseProtoMsg;
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
            typeUrl: string;
            encode(message: _13.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.Data;
            fromPartial(object: Partial<_13.Data>): _13.Data;
            fromAmino(object: _13.DataAmino): _13.Data;
            toAmino(message: _13.Data): _13.DataAmino;
            fromAminoMsg(object: _13.DataAminoMsg): _13.Data;
            fromProtoMsg(message: _13.DataProtoMsg): _13.Data;
            toProto(message: _13.Data): Uint8Array;
            toProtoMsg(message: _13.Data): _13.DataProtoMsg;
        };
        Children: {
            typeUrl: string;
            encode(message: _13.Children, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.Children;
            fromPartial(object: Partial<_13.Children>): _13.Children;
            fromAmino(object: _13.ChildrenAmino): _13.Children;
            toAmino(message: _13.Children): _13.ChildrenAmino;
            fromAminoMsg(object: _13.ChildrenAminoMsg): _13.Children;
            fromProtoMsg(message: _13.ChildrenProtoMsg): _13.Children;
            toProto(message: _13.Children): Uint8Array;
            toProtoMsg(message: _13.Children): _13.ChildrenProtoMsg;
        };
        QueryDataRequest: {
            typeUrl: string;
            encode(message: _12.QueryDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.QueryDataRequest;
            fromPartial(object: Partial<_12.QueryDataRequest>): _12.QueryDataRequest;
            fromAmino(object: _12.QueryDataRequestAmino): _12.QueryDataRequest;
            toAmino(message: _12.QueryDataRequest): _12.QueryDataRequestAmino;
            fromAminoMsg(object: _12.QueryDataRequestAminoMsg): _12.QueryDataRequest;
            fromProtoMsg(message: _12.QueryDataRequestProtoMsg): _12.QueryDataRequest;
            toProto(message: _12.QueryDataRequest): Uint8Array;
            toProtoMsg(message: _12.QueryDataRequest): _12.QueryDataRequestProtoMsg;
        };
        QueryDataResponse: {
            typeUrl: string;
            encode(message: _12.QueryDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.QueryDataResponse;
            fromPartial(object: Partial<_12.QueryDataResponse>): _12.QueryDataResponse;
            fromAmino(object: _12.QueryDataResponseAmino): _12.QueryDataResponse;
            toAmino(message: _12.QueryDataResponse): _12.QueryDataResponseAmino;
            fromAminoMsg(object: _12.QueryDataResponseAminoMsg): _12.QueryDataResponse;
            fromProtoMsg(message: _12.QueryDataResponseProtoMsg): _12.QueryDataResponse;
            toProto(message: _12.QueryDataResponse): Uint8Array;
            toProtoMsg(message: _12.QueryDataResponse): _12.QueryDataResponseProtoMsg;
        };
        QueryChildrenRequest: {
            typeUrl: string;
            encode(message: _12.QueryChildrenRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.QueryChildrenRequest;
            fromPartial(object: Partial<_12.QueryChildrenRequest>): _12.QueryChildrenRequest;
            fromAmino(object: _12.QueryChildrenRequestAmino): _12.QueryChildrenRequest;
            toAmino(message: _12.QueryChildrenRequest): _12.QueryChildrenRequestAmino;
            fromAminoMsg(object: _12.QueryChildrenRequestAminoMsg): _12.QueryChildrenRequest;
            fromProtoMsg(message: _12.QueryChildrenRequestProtoMsg): _12.QueryChildrenRequest;
            toProto(message: _12.QueryChildrenRequest): Uint8Array;
            toProtoMsg(message: _12.QueryChildrenRequest): _12.QueryChildrenRequestProtoMsg;
        };
        QueryChildrenResponse: {
            typeUrl: string;
            encode(message: _12.QueryChildrenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.QueryChildrenResponse;
            fromPartial(object: Partial<_12.QueryChildrenResponse>): _12.QueryChildrenResponse;
            fromAmino(object: _12.QueryChildrenResponseAmino): _12.QueryChildrenResponse;
            toAmino(message: _12.QueryChildrenResponse): _12.QueryChildrenResponseAmino;
            fromAminoMsg(object: _12.QueryChildrenResponseAminoMsg): _12.QueryChildrenResponse;
            fromProtoMsg(message: _12.QueryChildrenResponseProtoMsg): _12.QueryChildrenResponse;
            toProto(message: _12.QueryChildrenResponse): Uint8Array;
            toProtoMsg(message: _12.QueryChildrenResponse): _12.QueryChildrenResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.GenesisState;
            fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
            toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
            fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
            fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
            toProto(message: _11.GenesisState): Uint8Array;
            toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
        };
        DataEntry: {
            typeUrl: string;
            encode(message: _11.DataEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.DataEntry;
            fromPartial(object: Partial<_11.DataEntry>): _11.DataEntry;
            fromAmino(object: _11.DataEntryAmino): _11.DataEntry;
            toAmino(message: _11.DataEntry): _11.DataEntryAmino;
            fromAminoMsg(object: _11.DataEntryAminoMsg): _11.DataEntry;
            fromProtoMsg(message: _11.DataEntryProtoMsg): _11.DataEntry;
            toProto(message: _11.DataEntry): Uint8Array;
            toProtoMsg(message: _11.DataEntry): _11.DataEntryProtoMsg;
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
