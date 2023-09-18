import * as _6 from "../iov/configuration/v1beta1/msgs";
import * as _7 from "../iov/configuration/v1beta1/query";
import * as _8 from "../iov/configuration/v1beta1/types";
import * as _9 from "../iov/escrow/v1beta1/events";
import * as _10 from "../iov/escrow/v1beta1/genesis";
import * as _11 from "../iov/escrow/v1beta1/params";
import * as _12 from "../iov/escrow/v1beta1/query";
import * as _13 from "../iov/escrow/v1beta1/test";
import * as _14 from "../iov/escrow/v1beta1/tx";
import * as _15 from "../iov/escrow/v1beta1/types";
import * as _16 from "../iov/starname/v1beta1/genesis";
import * as _17 from "../iov/starname/v1beta1/query";
import * as _18 from "../iov/starname/v1beta1/tx";
import * as _19 from "../iov/starname/v1beta1/types";
import * as _143 from "../iov/configuration/v1beta1/query.lcd";
import * as _144 from "../iov/escrow/v1beta1/query.lcd";
import * as _145 from "../iov/starname/v1beta1/query.lcd";
import * as _146 from "../iov/configuration/v1beta1/query.rpc.Query";
import * as _147 from "../iov/escrow/v1beta1/query.rpc.Query";
import * as _148 from "../iov/starname/v1beta1/query.rpc.Query";
import * as _149 from "../iov/escrow/v1beta1/tx.rpc.msg";
import * as _150 from "../iov/starname/v1beta1/tx.rpc.msg";
export declare namespace starnamed {
    namespace x {
        namespace configuration {
            const v1beta1: {
                QueryClientImpl: typeof _146.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _7.QueryConfigRequest): Promise<_7.QueryConfigResponse>;
                    fees(request?: _7.QueryFeesRequest): Promise<_7.QueryFeesResponse>;
                };
                LCDQueryClient: typeof _143.LCDQueryClient;
                Config: {
                    typeUrl: string;
                    encode(message: _8.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.Config;
                    fromPartial(object: Partial<_8.Config>): _8.Config;
                    fromAmino(object: _8.ConfigAmino): _8.Config;
                    toAmino(message: _8.Config): _8.ConfigAmino;
                    fromAminoMsg(object: _8.ConfigAminoMsg): _8.Config;
                    fromProtoMsg(message: _8.ConfigProtoMsg): _8.Config;
                    toProto(message: _8.Config): Uint8Array;
                    toProtoMsg(message: _8.Config): _8.ConfigProtoMsg;
                };
                Fees: {
                    typeUrl: string;
                    encode(message: _8.Fees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.Fees;
                    fromPartial(object: Partial<_8.Fees>): _8.Fees;
                    fromAmino(object: _8.FeesAmino): _8.Fees;
                    toAmino(message: _8.Fees): _8.FeesAmino;
                    fromAminoMsg(object: _8.FeesAminoMsg): _8.Fees;
                    fromProtoMsg(message: _8.FeesProtoMsg): _8.Fees;
                    toProto(message: _8.Fees): Uint8Array;
                    toProtoMsg(message: _8.Fees): _8.FeesProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.GenesisState;
                    fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                    fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                    toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                    fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                    fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                    toProto(message: _8.GenesisState): Uint8Array;
                    toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
                };
                QueryConfigRequest: {
                    typeUrl: string;
                    encode(_: _7.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _7.QueryConfigRequest;
                    fromPartial(_: Partial<_7.QueryConfigRequest>): _7.QueryConfigRequest;
                    fromAmino(_: _7.QueryConfigRequestAmino): _7.QueryConfigRequest;
                    toAmino(_: _7.QueryConfigRequest): _7.QueryConfigRequestAmino;
                    fromAminoMsg(object: _7.QueryConfigRequestAminoMsg): _7.QueryConfigRequest;
                    fromProtoMsg(message: _7.QueryConfigRequestProtoMsg): _7.QueryConfigRequest;
                    toProto(message: _7.QueryConfigRequest): Uint8Array;
                    toProtoMsg(message: _7.QueryConfigRequest): _7.QueryConfigRequestProtoMsg;
                };
                QueryConfigResponse: {
                    typeUrl: string;
                    encode(message: _7.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.QueryConfigResponse;
                    fromPartial(object: Partial<_7.QueryConfigResponse>): _7.QueryConfigResponse;
                    fromAmino(object: _7.QueryConfigResponseAmino): _7.QueryConfigResponse;
                    toAmino(message: _7.QueryConfigResponse): _7.QueryConfigResponseAmino;
                    fromAminoMsg(object: _7.QueryConfigResponseAminoMsg): _7.QueryConfigResponse;
                    fromProtoMsg(message: _7.QueryConfigResponseProtoMsg): _7.QueryConfigResponse;
                    toProto(message: _7.QueryConfigResponse): Uint8Array;
                    toProtoMsg(message: _7.QueryConfigResponse): _7.QueryConfigResponseProtoMsg;
                };
                QueryFeesRequest: {
                    typeUrl: string;
                    encode(_: _7.QueryFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _7.QueryFeesRequest;
                    fromPartial(_: Partial<_7.QueryFeesRequest>): _7.QueryFeesRequest;
                    fromAmino(_: _7.QueryFeesRequestAmino): _7.QueryFeesRequest;
                    toAmino(_: _7.QueryFeesRequest): _7.QueryFeesRequestAmino;
                    fromAminoMsg(object: _7.QueryFeesRequestAminoMsg): _7.QueryFeesRequest;
                    fromProtoMsg(message: _7.QueryFeesRequestProtoMsg): _7.QueryFeesRequest;
                    toProto(message: _7.QueryFeesRequest): Uint8Array;
                    toProtoMsg(message: _7.QueryFeesRequest): _7.QueryFeesRequestProtoMsg;
                };
                QueryFeesResponse: {
                    typeUrl: string;
                    encode(message: _7.QueryFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.QueryFeesResponse;
                    fromPartial(object: Partial<_7.QueryFeesResponse>): _7.QueryFeesResponse;
                    fromAmino(object: _7.QueryFeesResponseAmino): _7.QueryFeesResponse;
                    toAmino(message: _7.QueryFeesResponse): _7.QueryFeesResponseAmino;
                    fromAminoMsg(object: _7.QueryFeesResponseAminoMsg): _7.QueryFeesResponse;
                    fromProtoMsg(message: _7.QueryFeesResponseProtoMsg): _7.QueryFeesResponse;
                    toProto(message: _7.QueryFeesResponse): Uint8Array;
                    toProtoMsg(message: _7.QueryFeesResponse): _7.QueryFeesResponseProtoMsg;
                };
                MsgUpdateConfig: {
                    typeUrl: string;
                    encode(message: _6.MsgUpdateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.MsgUpdateConfig;
                    fromPartial(object: Partial<_6.MsgUpdateConfig>): _6.MsgUpdateConfig;
                    fromAmino(object: _6.MsgUpdateConfigAmino): _6.MsgUpdateConfig;
                    toAmino(message: _6.MsgUpdateConfig): _6.MsgUpdateConfigAmino;
                    fromAminoMsg(object: _6.MsgUpdateConfigAminoMsg): _6.MsgUpdateConfig;
                    fromProtoMsg(message: _6.MsgUpdateConfigProtoMsg): _6.MsgUpdateConfig;
                    toProto(message: _6.MsgUpdateConfig): Uint8Array;
                    toProtoMsg(message: _6.MsgUpdateConfig): _6.MsgUpdateConfigProtoMsg;
                };
                MsgUpdateFees: {
                    typeUrl: string;
                    encode(message: _6.MsgUpdateFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.MsgUpdateFees;
                    fromPartial(object: Partial<_6.MsgUpdateFees>): _6.MsgUpdateFees;
                    fromAmino(object: _6.MsgUpdateFeesAmino): _6.MsgUpdateFees;
                    toAmino(message: _6.MsgUpdateFees): _6.MsgUpdateFeesAmino;
                    fromAminoMsg(object: _6.MsgUpdateFeesAminoMsg): _6.MsgUpdateFees;
                    fromProtoMsg(message: _6.MsgUpdateFeesProtoMsg): _6.MsgUpdateFees;
                    toProto(message: _6.MsgUpdateFees): Uint8Array;
                    toProtoMsg(message: _6.MsgUpdateFees): _6.MsgUpdateFeesProtoMsg;
                };
            };
        }
        namespace escrow {
            const v1beta1: {
                MsgClientImpl: typeof _149.MsgClientImpl;
                QueryClientImpl: typeof _147.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    escrow(request: _12.QueryEscrowRequest): Promise<_12.QueryEscrowResponse>;
                    escrows(request: _12.QueryEscrowsRequest): Promise<_12.QueryEscrowsResponse>;
                };
                LCDQueryClient: typeof _144.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createEscrow(value: _14.MsgCreateEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateEscrow(value: _14.MsgUpdateEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        transferToEscrow(value: _14.MsgTransferToEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        refundEscrow(value: _14.MsgRefundEscrow): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createEscrow(value: _14.MsgCreateEscrow): {
                            typeUrl: string;
                            value: _14.MsgCreateEscrow;
                        };
                        updateEscrow(value: _14.MsgUpdateEscrow): {
                            typeUrl: string;
                            value: _14.MsgUpdateEscrow;
                        };
                        transferToEscrow(value: _14.MsgTransferToEscrow): {
                            typeUrl: string;
                            value: _14.MsgTransferToEscrow;
                        };
                        refundEscrow(value: _14.MsgRefundEscrow): {
                            typeUrl: string;
                            value: _14.MsgRefundEscrow;
                        };
                    };
                    fromJSON: {
                        createEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgCreateEscrow;
                        };
                        updateEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgUpdateEscrow;
                        };
                        transferToEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgTransferToEscrow;
                        };
                        refundEscrow(value: any): {
                            typeUrl: string;
                            value: _14.MsgRefundEscrow;
                        };
                    };
                    fromPartial: {
                        createEscrow(value: _14.MsgCreateEscrow): {
                            typeUrl: string;
                            value: _14.MsgCreateEscrow;
                        };
                        updateEscrow(value: _14.MsgUpdateEscrow): {
                            typeUrl: string;
                            value: _14.MsgUpdateEscrow;
                        };
                        transferToEscrow(value: _14.MsgTransferToEscrow): {
                            typeUrl: string;
                            value: _14.MsgTransferToEscrow;
                        };
                        refundEscrow(value: _14.MsgRefundEscrow): {
                            typeUrl: string;
                            value: _14.MsgRefundEscrow;
                        };
                    };
                };
                AminoConverter: {
                    "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
                        aminoType: string;
                        toAmino: (message: _14.MsgCreateEscrow) => _14.MsgCreateEscrowAmino;
                        fromAmino: (object: _14.MsgCreateEscrowAmino) => _14.MsgCreateEscrow;
                    };
                    "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
                        aminoType: string;
                        toAmino: (message: _14.MsgUpdateEscrow) => _14.MsgUpdateEscrowAmino;
                        fromAmino: (object: _14.MsgUpdateEscrowAmino) => _14.MsgUpdateEscrow;
                    };
                    "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
                        aminoType: string;
                        toAmino: (message: _14.MsgTransferToEscrow) => _14.MsgTransferToEscrowAmino;
                        fromAmino: (object: _14.MsgTransferToEscrowAmino) => _14.MsgTransferToEscrow;
                    };
                    "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
                        aminoType: string;
                        toAmino: (message: _14.MsgRefundEscrow) => _14.MsgRefundEscrowAmino;
                        fromAmino: (object: _14.MsgRefundEscrowAmino) => _14.MsgRefundEscrow;
                    };
                };
                escrowStateFromJSON(object: any): _15.EscrowState;
                escrowStateToJSON(object: _15.EscrowState): string;
                EscrowState: typeof _15.EscrowState;
                EscrowStateSDKType: typeof _15.EscrowState;
                EscrowStateAmino: typeof _15.EscrowState;
                Escrow: {
                    typeUrl: string;
                    encode(message: _15.Escrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.Escrow;
                    fromPartial(object: Partial<_15.Escrow>): _15.Escrow;
                    fromAmino(object: _15.EscrowAmino): _15.Escrow;
                    toAmino(message: _15.Escrow): _15.EscrowAmino;
                    fromAminoMsg(object: _15.EscrowAminoMsg): _15.Escrow;
                    fromProtoMsg(message: _15.EscrowProtoMsg): _15.Escrow;
                    toProto(message: _15.Escrow): Uint8Array;
                    toProtoMsg(message: _15.Escrow): _15.EscrowProtoMsg;
                };
                TransferableObject_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
                TransferableObject_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
                TransferableObject_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
                MsgCreateEscrow: {
                    typeUrl: string;
                    encode(message: _14.MsgCreateEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgCreateEscrow;
                    fromPartial(object: Partial<_14.MsgCreateEscrow>): _14.MsgCreateEscrow;
                    fromAmino(object: _14.MsgCreateEscrowAmino): _14.MsgCreateEscrow;
                    toAmino(message: _14.MsgCreateEscrow): _14.MsgCreateEscrowAmino;
                    fromAminoMsg(object: _14.MsgCreateEscrowAminoMsg): _14.MsgCreateEscrow;
                    fromProtoMsg(message: _14.MsgCreateEscrowProtoMsg): _14.MsgCreateEscrow;
                    toProto(message: _14.MsgCreateEscrow): Uint8Array;
                    toProtoMsg(message: _14.MsgCreateEscrow): _14.MsgCreateEscrowProtoMsg;
                };
                MsgCreateEscrowResponse: {
                    typeUrl: string;
                    encode(message: _14.MsgCreateEscrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgCreateEscrowResponse;
                    fromPartial(object: Partial<_14.MsgCreateEscrowResponse>): _14.MsgCreateEscrowResponse;
                    fromAmino(object: _14.MsgCreateEscrowResponseAmino): _14.MsgCreateEscrowResponse;
                    toAmino(message: _14.MsgCreateEscrowResponse): _14.MsgCreateEscrowResponseAmino;
                    fromAminoMsg(object: _14.MsgCreateEscrowResponseAminoMsg): _14.MsgCreateEscrowResponse;
                    fromProtoMsg(message: _14.MsgCreateEscrowResponseProtoMsg): _14.MsgCreateEscrowResponse;
                    toProto(message: _14.MsgCreateEscrowResponse): Uint8Array;
                    toProtoMsg(message: _14.MsgCreateEscrowResponse): _14.MsgCreateEscrowResponseProtoMsg;
                };
                MsgUpdateEscrow: {
                    typeUrl: string;
                    encode(message: _14.MsgUpdateEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgUpdateEscrow;
                    fromPartial(object: Partial<_14.MsgUpdateEscrow>): _14.MsgUpdateEscrow;
                    fromAmino(object: _14.MsgUpdateEscrowAmino): _14.MsgUpdateEscrow;
                    toAmino(message: _14.MsgUpdateEscrow): _14.MsgUpdateEscrowAmino;
                    fromAminoMsg(object: _14.MsgUpdateEscrowAminoMsg): _14.MsgUpdateEscrow;
                    fromProtoMsg(message: _14.MsgUpdateEscrowProtoMsg): _14.MsgUpdateEscrow;
                    toProto(message: _14.MsgUpdateEscrow): Uint8Array;
                    toProtoMsg(message: _14.MsgUpdateEscrow): _14.MsgUpdateEscrowProtoMsg;
                };
                MsgUpdateEscrowResponse: {
                    typeUrl: string;
                    encode(_: _14.MsgUpdateEscrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _14.MsgUpdateEscrowResponse;
                    fromPartial(_: Partial<_14.MsgUpdateEscrowResponse>): _14.MsgUpdateEscrowResponse;
                    fromAmino(_: _14.MsgUpdateEscrowResponseAmino): _14.MsgUpdateEscrowResponse;
                    toAmino(_: _14.MsgUpdateEscrowResponse): _14.MsgUpdateEscrowResponseAmino;
                    fromAminoMsg(object: _14.MsgUpdateEscrowResponseAminoMsg): _14.MsgUpdateEscrowResponse;
                    fromProtoMsg(message: _14.MsgUpdateEscrowResponseProtoMsg): _14.MsgUpdateEscrowResponse;
                    toProto(message: _14.MsgUpdateEscrowResponse): Uint8Array;
                    toProtoMsg(message: _14.MsgUpdateEscrowResponse): _14.MsgUpdateEscrowResponseProtoMsg;
                };
                MsgTransferToEscrow: {
                    typeUrl: string;
                    encode(message: _14.MsgTransferToEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgTransferToEscrow;
                    fromPartial(object: Partial<_14.MsgTransferToEscrow>): _14.MsgTransferToEscrow;
                    fromAmino(object: _14.MsgTransferToEscrowAmino): _14.MsgTransferToEscrow;
                    toAmino(message: _14.MsgTransferToEscrow): _14.MsgTransferToEscrowAmino;
                    fromAminoMsg(object: _14.MsgTransferToEscrowAminoMsg): _14.MsgTransferToEscrow;
                    fromProtoMsg(message: _14.MsgTransferToEscrowProtoMsg): _14.MsgTransferToEscrow;
                    toProto(message: _14.MsgTransferToEscrow): Uint8Array;
                    toProtoMsg(message: _14.MsgTransferToEscrow): _14.MsgTransferToEscrowProtoMsg;
                };
                MsgTransferToEscrowResponse: {
                    typeUrl: string;
                    encode(_: _14.MsgTransferToEscrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _14.MsgTransferToEscrowResponse;
                    fromPartial(_: Partial<_14.MsgTransferToEscrowResponse>): _14.MsgTransferToEscrowResponse;
                    fromAmino(_: _14.MsgTransferToEscrowResponseAmino): _14.MsgTransferToEscrowResponse;
                    toAmino(_: _14.MsgTransferToEscrowResponse): _14.MsgTransferToEscrowResponseAmino;
                    fromAminoMsg(object: _14.MsgTransferToEscrowResponseAminoMsg): _14.MsgTransferToEscrowResponse;
                    fromProtoMsg(message: _14.MsgTransferToEscrowResponseProtoMsg): _14.MsgTransferToEscrowResponse;
                    toProto(message: _14.MsgTransferToEscrowResponse): Uint8Array;
                    toProtoMsg(message: _14.MsgTransferToEscrowResponse): _14.MsgTransferToEscrowResponseProtoMsg;
                };
                MsgRefundEscrow: {
                    typeUrl: string;
                    encode(message: _14.MsgRefundEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgRefundEscrow;
                    fromPartial(object: Partial<_14.MsgRefundEscrow>): _14.MsgRefundEscrow;
                    fromAmino(object: _14.MsgRefundEscrowAmino): _14.MsgRefundEscrow;
                    toAmino(message: _14.MsgRefundEscrow): _14.MsgRefundEscrowAmino;
                    fromAminoMsg(object: _14.MsgRefundEscrowAminoMsg): _14.MsgRefundEscrow;
                    fromProtoMsg(message: _14.MsgRefundEscrowProtoMsg): _14.MsgRefundEscrow;
                    toProto(message: _14.MsgRefundEscrow): Uint8Array;
                    toProtoMsg(message: _14.MsgRefundEscrow): _14.MsgRefundEscrowProtoMsg;
                };
                MsgRefundEscrowResponse: {
                    typeUrl: string;
                    encode(_: _14.MsgRefundEscrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _14.MsgRefundEscrowResponse;
                    fromPartial(_: Partial<_14.MsgRefundEscrowResponse>): _14.MsgRefundEscrowResponse;
                    fromAmino(_: _14.MsgRefundEscrowResponseAmino): _14.MsgRefundEscrowResponse;
                    toAmino(_: _14.MsgRefundEscrowResponse): _14.MsgRefundEscrowResponseAmino;
                    fromAminoMsg(object: _14.MsgRefundEscrowResponseAminoMsg): _14.MsgRefundEscrowResponse;
                    fromProtoMsg(message: _14.MsgRefundEscrowResponseProtoMsg): _14.MsgRefundEscrowResponse;
                    toProto(message: _14.MsgRefundEscrowResponse): Uint8Array;
                    toProtoMsg(message: _14.MsgRefundEscrowResponse): _14.MsgRefundEscrowResponseProtoMsg;
                };
                TestObject: {
                    typeUrl: string;
                    encode(message: _13.TestObject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.TestObject;
                    fromPartial(object: Partial<_13.TestObject>): _13.TestObject;
                    fromAmino(object: _13.TestObjectAmino): _13.TestObject;
                    toAmino(message: _13.TestObject): _13.TestObjectAmino;
                    fromAminoMsg(object: _13.TestObjectAminoMsg): _13.TestObject;
                    fromProtoMsg(message: _13.TestObjectProtoMsg): _13.TestObject;
                    toProto(message: _13.TestObject): Uint8Array;
                    toProtoMsg(message: _13.TestObject): _13.TestObjectProtoMsg;
                };
                TestTimeConstrainedObject: {
                    typeUrl: string;
                    encode(message: _13.TestTimeConstrainedObject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.TestTimeConstrainedObject;
                    fromPartial(object: Partial<_13.TestTimeConstrainedObject>): _13.TestTimeConstrainedObject;
                    fromAmino(object: _13.TestTimeConstrainedObjectAmino): _13.TestTimeConstrainedObject;
                    toAmino(message: _13.TestTimeConstrainedObject): _13.TestTimeConstrainedObjectAmino;
                    fromAminoMsg(object: _13.TestTimeConstrainedObjectAminoMsg): _13.TestTimeConstrainedObject;
                    fromProtoMsg(message: _13.TestTimeConstrainedObjectProtoMsg): _13.TestTimeConstrainedObject;
                    toProto(message: _13.TestTimeConstrainedObject): Uint8Array;
                    toProtoMsg(message: _13.TestTimeConstrainedObject): _13.TestTimeConstrainedObjectProtoMsg;
                };
                QueryEscrowRequest: {
                    typeUrl: string;
                    encode(message: _12.QueryEscrowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.QueryEscrowRequest;
                    fromPartial(object: Partial<_12.QueryEscrowRequest>): _12.QueryEscrowRequest;
                    fromAmino(object: _12.QueryEscrowRequestAmino): _12.QueryEscrowRequest;
                    toAmino(message: _12.QueryEscrowRequest): _12.QueryEscrowRequestAmino;
                    fromAminoMsg(object: _12.QueryEscrowRequestAminoMsg): _12.QueryEscrowRequest;
                    fromProtoMsg(message: _12.QueryEscrowRequestProtoMsg): _12.QueryEscrowRequest;
                    toProto(message: _12.QueryEscrowRequest): Uint8Array;
                    toProtoMsg(message: _12.QueryEscrowRequest): _12.QueryEscrowRequestProtoMsg;
                };
                QueryEscrowResponse: {
                    typeUrl: string;
                    encode(message: _12.QueryEscrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.QueryEscrowResponse;
                    fromPartial(object: Partial<_12.QueryEscrowResponse>): _12.QueryEscrowResponse;
                    fromAmino(object: _12.QueryEscrowResponseAmino): _12.QueryEscrowResponse;
                    toAmino(message: _12.QueryEscrowResponse): _12.QueryEscrowResponseAmino;
                    fromAminoMsg(object: _12.QueryEscrowResponseAminoMsg): _12.QueryEscrowResponse;
                    fromProtoMsg(message: _12.QueryEscrowResponseProtoMsg): _12.QueryEscrowResponse;
                    toProto(message: _12.QueryEscrowResponse): Uint8Array;
                    toProtoMsg(message: _12.QueryEscrowResponse): _12.QueryEscrowResponseProtoMsg;
                };
                QueryEscrowsRequest: {
                    typeUrl: string;
                    encode(message: _12.QueryEscrowsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.QueryEscrowsRequest;
                    fromPartial(object: Partial<_12.QueryEscrowsRequest>): _12.QueryEscrowsRequest;
                    fromAmino(object: _12.QueryEscrowsRequestAmino): _12.QueryEscrowsRequest;
                    toAmino(message: _12.QueryEscrowsRequest): _12.QueryEscrowsRequestAmino;
                    fromAminoMsg(object: _12.QueryEscrowsRequestAminoMsg): _12.QueryEscrowsRequest;
                    fromProtoMsg(message: _12.QueryEscrowsRequestProtoMsg): _12.QueryEscrowsRequest;
                    toProto(message: _12.QueryEscrowsRequest): Uint8Array;
                    toProtoMsg(message: _12.QueryEscrowsRequest): _12.QueryEscrowsRequestProtoMsg;
                };
                QueryEscrowsResponse: {
                    typeUrl: string;
                    encode(message: _12.QueryEscrowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.QueryEscrowsResponse;
                    fromPartial(object: Partial<_12.QueryEscrowsResponse>): _12.QueryEscrowsResponse;
                    fromAmino(object: _12.QueryEscrowsResponseAmino): _12.QueryEscrowsResponse;
                    toAmino(message: _12.QueryEscrowsResponse): _12.QueryEscrowsResponseAmino;
                    fromAminoMsg(object: _12.QueryEscrowsResponseAminoMsg): _12.QueryEscrowsResponse;
                    fromProtoMsg(message: _12.QueryEscrowsResponseProtoMsg): _12.QueryEscrowsResponse;
                    toProto(message: _12.QueryEscrowsResponse): Uint8Array;
                    toProtoMsg(message: _12.QueryEscrowsResponse): _12.QueryEscrowsResponseProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.Params;
                    fromPartial(object: Partial<_11.Params>): _11.Params;
                    fromAmino(object: _11.ParamsAmino): _11.Params;
                    toAmino(message: _11.Params): _11.ParamsAmino;
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
                EventCreatedEscrow: {
                    typeUrl: string;
                    encode(message: _9.EventCreatedEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.EventCreatedEscrow;
                    fromPartial(object: Partial<_9.EventCreatedEscrow>): _9.EventCreatedEscrow;
                    fromAmino(object: _9.EventCreatedEscrowAmino): _9.EventCreatedEscrow;
                    toAmino(message: _9.EventCreatedEscrow): _9.EventCreatedEscrowAmino;
                    fromAminoMsg(object: _9.EventCreatedEscrowAminoMsg): _9.EventCreatedEscrow;
                    fromProtoMsg(message: _9.EventCreatedEscrowProtoMsg): _9.EventCreatedEscrow;
                    toProto(message: _9.EventCreatedEscrow): Uint8Array;
                    toProtoMsg(message: _9.EventCreatedEscrow): _9.EventCreatedEscrowProtoMsg;
                };
                EventUpdatedEscrow: {
                    typeUrl: string;
                    encode(message: _9.EventUpdatedEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.EventUpdatedEscrow;
                    fromPartial(object: Partial<_9.EventUpdatedEscrow>): _9.EventUpdatedEscrow;
                    fromAmino(object: _9.EventUpdatedEscrowAmino): _9.EventUpdatedEscrow;
                    toAmino(message: _9.EventUpdatedEscrow): _9.EventUpdatedEscrowAmino;
                    fromAminoMsg(object: _9.EventUpdatedEscrowAminoMsg): _9.EventUpdatedEscrow;
                    fromProtoMsg(message: _9.EventUpdatedEscrowProtoMsg): _9.EventUpdatedEscrow;
                    toProto(message: _9.EventUpdatedEscrow): Uint8Array;
                    toProtoMsg(message: _9.EventUpdatedEscrow): _9.EventUpdatedEscrowProtoMsg;
                };
                EventCompletedEscrow: {
                    typeUrl: string;
                    encode(message: _9.EventCompletedEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.EventCompletedEscrow;
                    fromPartial(object: Partial<_9.EventCompletedEscrow>): _9.EventCompletedEscrow;
                    fromAmino(object: _9.EventCompletedEscrowAmino): _9.EventCompletedEscrow;
                    toAmino(message: _9.EventCompletedEscrow): _9.EventCompletedEscrowAmino;
                    fromAminoMsg(object: _9.EventCompletedEscrowAminoMsg): _9.EventCompletedEscrow;
                    fromProtoMsg(message: _9.EventCompletedEscrowProtoMsg): _9.EventCompletedEscrow;
                    toProto(message: _9.EventCompletedEscrow): Uint8Array;
                    toProtoMsg(message: _9.EventCompletedEscrow): _9.EventCompletedEscrowProtoMsg;
                };
                EventRefundedEscrow: {
                    typeUrl: string;
                    encode(message: _9.EventRefundedEscrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.EventRefundedEscrow;
                    fromPartial(object: Partial<_9.EventRefundedEscrow>): _9.EventRefundedEscrow;
                    fromAmino(object: _9.EventRefundedEscrowAmino): _9.EventRefundedEscrow;
                    toAmino(message: _9.EventRefundedEscrow): _9.EventRefundedEscrowAmino;
                    fromAminoMsg(object: _9.EventRefundedEscrowAminoMsg): _9.EventRefundedEscrow;
                    fromProtoMsg(message: _9.EventRefundedEscrowProtoMsg): _9.EventRefundedEscrow;
                    toProto(message: _9.EventRefundedEscrow): Uint8Array;
                    toProtoMsg(message: _9.EventRefundedEscrow): _9.EventRefundedEscrowProtoMsg;
                };
            };
        }
        namespace starname {
            const v1beta1: {
                MsgClientImpl: typeof _150.MsgClientImpl;
                QueryClientImpl: typeof _148.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    domain(request: _17.QueryDomainRequest): Promise<_17.QueryDomainResponse>;
                    domainAccounts(request: _17.QueryDomainAccountsRequest): Promise<_17.QueryDomainAccountsResponse>;
                    starname(request: _17.QueryStarnameRequest): Promise<_17.QueryStarnameResponse>;
                    ownerAccounts(request: _17.QueryOwnerAccountsRequest): Promise<_17.QueryOwnerAccountsResponse>;
                    ownerDomains(request: _17.QueryOwnerDomainsRequest): Promise<_17.QueryOwnerDomainsResponse>;
                    resourceAccounts(request: _17.QueryResourceAccountsRequest): Promise<_17.QueryResourceAccountsResponse>;
                    brokerAccounts(request: _17.QueryBrokerAccountsRequest): Promise<_17.QueryBrokerAccountsResponse>;
                    brokerDomains(request: _17.QueryBrokerDomainsRequest): Promise<_17.QueryBrokerDomainsResponse>;
                    yield(request?: _17.QueryYieldRequest): Promise<_17.QueryYieldResponse>;
                };
                LCDQueryClient: typeof _145.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        addAccountCertificate(value: _18.MsgAddAccountCertificate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteAccount(value: _18.MsgDeleteAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteAccountCertificate(value: _18.MsgDeleteAccountCertificate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        deleteDomain(value: _18.MsgDeleteDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerAccount(value: _18.MsgRegisterAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerDomain(value: _18.MsgRegisterDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        renewAccount(value: _18.MsgRenewAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        renewDomain(value: _18.MsgRenewDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        replaceAccountMetadata(value: _18.MsgReplaceAccountMetadata): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        replaceAccountResources(value: _18.MsgReplaceAccountResources): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        transferAccount(value: _18.MsgTransferAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        transferDomain(value: _18.MsgTransferDomain): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        addAccountCertificate(value: _18.MsgAddAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgAddAccountCertificate;
                        };
                        deleteAccount(value: _18.MsgDeleteAccount): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccount;
                        };
                        deleteAccountCertificate(value: _18.MsgDeleteAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccountCertificate;
                        };
                        deleteDomain(value: _18.MsgDeleteDomain): {
                            typeUrl: string;
                            value: _18.MsgDeleteDomain;
                        };
                        registerAccount(value: _18.MsgRegisterAccount): {
                            typeUrl: string;
                            value: _18.MsgRegisterAccount;
                        };
                        registerDomain(value: _18.MsgRegisterDomain): {
                            typeUrl: string;
                            value: _18.MsgRegisterDomain;
                        };
                        renewAccount(value: _18.MsgRenewAccount): {
                            typeUrl: string;
                            value: _18.MsgRenewAccount;
                        };
                        renewDomain(value: _18.MsgRenewDomain): {
                            typeUrl: string;
                            value: _18.MsgRenewDomain;
                        };
                        replaceAccountMetadata(value: _18.MsgReplaceAccountMetadata): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountMetadata;
                        };
                        replaceAccountResources(value: _18.MsgReplaceAccountResources): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountResources;
                        };
                        transferAccount(value: _18.MsgTransferAccount): {
                            typeUrl: string;
                            value: _18.MsgTransferAccount;
                        };
                        transferDomain(value: _18.MsgTransferDomain): {
                            typeUrl: string;
                            value: _18.MsgTransferDomain;
                        };
                    };
                    fromJSON: {
                        addAccountCertificate(value: any): {
                            typeUrl: string;
                            value: _18.MsgAddAccountCertificate;
                        };
                        deleteAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccount;
                        };
                        deleteAccountCertificate(value: any): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccountCertificate;
                        };
                        deleteDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgDeleteDomain;
                        };
                        registerAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgRegisterAccount;
                        };
                        registerDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgRegisterDomain;
                        };
                        renewAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgRenewAccount;
                        };
                        renewDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgRenewDomain;
                        };
                        replaceAccountMetadata(value: any): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountMetadata;
                        };
                        replaceAccountResources(value: any): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountResources;
                        };
                        transferAccount(value: any): {
                            typeUrl: string;
                            value: _18.MsgTransferAccount;
                        };
                        transferDomain(value: any): {
                            typeUrl: string;
                            value: _18.MsgTransferDomain;
                        };
                    };
                    fromPartial: {
                        addAccountCertificate(value: _18.MsgAddAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgAddAccountCertificate;
                        };
                        deleteAccount(value: _18.MsgDeleteAccount): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccount;
                        };
                        deleteAccountCertificate(value: _18.MsgDeleteAccountCertificate): {
                            typeUrl: string;
                            value: _18.MsgDeleteAccountCertificate;
                        };
                        deleteDomain(value: _18.MsgDeleteDomain): {
                            typeUrl: string;
                            value: _18.MsgDeleteDomain;
                        };
                        registerAccount(value: _18.MsgRegisterAccount): {
                            typeUrl: string;
                            value: _18.MsgRegisterAccount;
                        };
                        registerDomain(value: _18.MsgRegisterDomain): {
                            typeUrl: string;
                            value: _18.MsgRegisterDomain;
                        };
                        renewAccount(value: _18.MsgRenewAccount): {
                            typeUrl: string;
                            value: _18.MsgRenewAccount;
                        };
                        renewDomain(value: _18.MsgRenewDomain): {
                            typeUrl: string;
                            value: _18.MsgRenewDomain;
                        };
                        replaceAccountMetadata(value: _18.MsgReplaceAccountMetadata): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountMetadata;
                        };
                        replaceAccountResources(value: _18.MsgReplaceAccountResources): {
                            typeUrl: string;
                            value: _18.MsgReplaceAccountResources;
                        };
                        transferAccount(value: _18.MsgTransferAccount): {
                            typeUrl: string;
                            value: _18.MsgTransferAccount;
                        };
                        transferDomain(value: _18.MsgTransferDomain): {
                            typeUrl: string;
                            value: _18.MsgTransferDomain;
                        };
                    };
                };
                AminoConverter: {
                    "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate": {
                        aminoType: string;
                        toAmino: (message: _18.MsgAddAccountCertificate) => _18.MsgAddAccountCertificateAmino;
                        fromAmino: (object: _18.MsgAddAccountCertificateAmino) => _18.MsgAddAccountCertificate;
                    };
                    "/starnamed.x.starname.v1beta1.MsgDeleteAccount": {
                        aminoType: string;
                        toAmino: (message: _18.MsgDeleteAccount) => _18.MsgDeleteAccountAmino;
                        fromAmino: (object: _18.MsgDeleteAccountAmino) => _18.MsgDeleteAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate": {
                        aminoType: string;
                        toAmino: (message: _18.MsgDeleteAccountCertificate) => _18.MsgDeleteAccountCertificateAmino;
                        fromAmino: (object: _18.MsgDeleteAccountCertificateAmino) => _18.MsgDeleteAccountCertificate;
                    };
                    "/starnamed.x.starname.v1beta1.MsgDeleteDomain": {
                        aminoType: string;
                        toAmino: (message: _18.MsgDeleteDomain) => _18.MsgDeleteDomainAmino;
                        fromAmino: (object: _18.MsgDeleteDomainAmino) => _18.MsgDeleteDomain;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRegisterAccount": {
                        aminoType: string;
                        toAmino: (message: _18.MsgRegisterAccount) => _18.MsgRegisterAccountAmino;
                        fromAmino: (object: _18.MsgRegisterAccountAmino) => _18.MsgRegisterAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRegisterDomain": {
                        aminoType: string;
                        toAmino: (message: _18.MsgRegisterDomain) => _18.MsgRegisterDomainAmino;
                        fromAmino: (object: _18.MsgRegisterDomainAmino) => _18.MsgRegisterDomain;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRenewAccount": {
                        aminoType: string;
                        toAmino: (message: _18.MsgRenewAccount) => _18.MsgRenewAccountAmino;
                        fromAmino: (object: _18.MsgRenewAccountAmino) => _18.MsgRenewAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgRenewDomain": {
                        aminoType: string;
                        toAmino: (message: _18.MsgRenewDomain) => _18.MsgRenewDomainAmino;
                        fromAmino: (object: _18.MsgRenewDomainAmino) => _18.MsgRenewDomain;
                    };
                    "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata": {
                        aminoType: string;
                        toAmino: (message: _18.MsgReplaceAccountMetadata) => _18.MsgReplaceAccountMetadataAmino;
                        fromAmino: (object: _18.MsgReplaceAccountMetadataAmino) => _18.MsgReplaceAccountMetadata;
                    };
                    "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources": {
                        aminoType: string;
                        toAmino: (message: _18.MsgReplaceAccountResources) => _18.MsgReplaceAccountResourcesAmino;
                        fromAmino: (object: _18.MsgReplaceAccountResourcesAmino) => _18.MsgReplaceAccountResources;
                    };
                    "/starnamed.x.starname.v1beta1.MsgTransferAccount": {
                        aminoType: string;
                        toAmino: (message: _18.MsgTransferAccount) => _18.MsgTransferAccountAmino;
                        fromAmino: (object: _18.MsgTransferAccountAmino) => _18.MsgTransferAccount;
                    };
                    "/starnamed.x.starname.v1beta1.MsgTransferDomain": {
                        aminoType: string;
                        toAmino: (message: _18.MsgTransferDomain) => _18.MsgTransferDomainAmino;
                        fromAmino: (object: _18.MsgTransferDomainAmino) => _18.MsgTransferDomain;
                    };
                };
                Resource: {
                    typeUrl: string;
                    encode(message: _19.Resource, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Resource;
                    fromPartial(object: Partial<_19.Resource>): _19.Resource;
                    fromAmino(object: _19.ResourceAmino): _19.Resource;
                    toAmino(message: _19.Resource): _19.ResourceAmino;
                    fromAminoMsg(object: _19.ResourceAminoMsg): _19.Resource;
                    fromProtoMsg(message: _19.ResourceProtoMsg): _19.Resource;
                    toProto(message: _19.Resource): Uint8Array;
                    toProtoMsg(message: _19.Resource): _19.ResourceProtoMsg;
                };
                Domain: {
                    typeUrl: string;
                    encode(message: _19.Domain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Domain;
                    fromPartial(object: Partial<_19.Domain>): _19.Domain;
                    fromAmino(object: _19.DomainAmino): _19.Domain;
                    toAmino(message: _19.Domain): _19.DomainAmino;
                    fromAminoMsg(object: _19.DomainAminoMsg): _19.Domain;
                    fromProtoMsg(message: _19.DomainProtoMsg): _19.Domain;
                    toProto(message: _19.Domain): Uint8Array;
                    toProtoMsg(message: _19.Domain): _19.DomainProtoMsg;
                };
                Account: {
                    typeUrl: string;
                    encode(message: _19.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Account;
                    fromPartial(object: Partial<_19.Account>): _19.Account;
                    fromAmino(object: _19.AccountAmino): _19.Account;
                    toAmino(message: _19.Account): _19.AccountAmino;
                    fromAminoMsg(object: _19.AccountAminoMsg): _19.Account;
                    fromProtoMsg(message: _19.AccountProtoMsg): _19.Account;
                    toProto(message: _19.Account): Uint8Array;
                    toProtoMsg(message: _19.Account): _19.AccountProtoMsg;
                };
                MsgAddAccountCertificate: {
                    typeUrl: string;
                    encode(message: _18.MsgAddAccountCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgAddAccountCertificate;
                    fromPartial(object: Partial<_18.MsgAddAccountCertificate>): _18.MsgAddAccountCertificate;
                    fromAmino(object: _18.MsgAddAccountCertificateAmino): _18.MsgAddAccountCertificate;
                    toAmino(message: _18.MsgAddAccountCertificate): _18.MsgAddAccountCertificateAmino;
                    fromAminoMsg(object: _18.MsgAddAccountCertificateAminoMsg): _18.MsgAddAccountCertificate;
                    fromProtoMsg(message: _18.MsgAddAccountCertificateProtoMsg): _18.MsgAddAccountCertificate;
                    toProto(message: _18.MsgAddAccountCertificate): Uint8Array;
                    toProtoMsg(message: _18.MsgAddAccountCertificate): _18.MsgAddAccountCertificateProtoMsg;
                };
                MsgAddAccountCertificateResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgAddAccountCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgAddAccountCertificateResponse;
                    fromPartial(_: Partial<_18.MsgAddAccountCertificateResponse>): _18.MsgAddAccountCertificateResponse;
                    fromAmino(_: _18.MsgAddAccountCertificateResponseAmino): _18.MsgAddAccountCertificateResponse;
                    toAmino(_: _18.MsgAddAccountCertificateResponse): _18.MsgAddAccountCertificateResponseAmino;
                    fromAminoMsg(object: _18.MsgAddAccountCertificateResponseAminoMsg): _18.MsgAddAccountCertificateResponse;
                    fromProtoMsg(message: _18.MsgAddAccountCertificateResponseProtoMsg): _18.MsgAddAccountCertificateResponse;
                    toProto(message: _18.MsgAddAccountCertificateResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgAddAccountCertificateResponse): _18.MsgAddAccountCertificateResponseProtoMsg;
                };
                MsgDeleteAccountCertificate: {
                    typeUrl: string;
                    encode(message: _18.MsgDeleteAccountCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgDeleteAccountCertificate;
                    fromPartial(object: Partial<_18.MsgDeleteAccountCertificate>): _18.MsgDeleteAccountCertificate;
                    fromAmino(object: _18.MsgDeleteAccountCertificateAmino): _18.MsgDeleteAccountCertificate;
                    toAmino(message: _18.MsgDeleteAccountCertificate): _18.MsgDeleteAccountCertificateAmino;
                    fromAminoMsg(object: _18.MsgDeleteAccountCertificateAminoMsg): _18.MsgDeleteAccountCertificate;
                    fromProtoMsg(message: _18.MsgDeleteAccountCertificateProtoMsg): _18.MsgDeleteAccountCertificate;
                    toProto(message: _18.MsgDeleteAccountCertificate): Uint8Array;
                    toProtoMsg(message: _18.MsgDeleteAccountCertificate): _18.MsgDeleteAccountCertificateProtoMsg;
                };
                MsgDeleteAccountCertificateResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgDeleteAccountCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgDeleteAccountCertificateResponse;
                    fromPartial(_: Partial<_18.MsgDeleteAccountCertificateResponse>): _18.MsgDeleteAccountCertificateResponse;
                    fromAmino(_: _18.MsgDeleteAccountCertificateResponseAmino): _18.MsgDeleteAccountCertificateResponse;
                    toAmino(_: _18.MsgDeleteAccountCertificateResponse): _18.MsgDeleteAccountCertificateResponseAmino;
                    fromAminoMsg(object: _18.MsgDeleteAccountCertificateResponseAminoMsg): _18.MsgDeleteAccountCertificateResponse;
                    fromProtoMsg(message: _18.MsgDeleteAccountCertificateResponseProtoMsg): _18.MsgDeleteAccountCertificateResponse;
                    toProto(message: _18.MsgDeleteAccountCertificateResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgDeleteAccountCertificateResponse): _18.MsgDeleteAccountCertificateResponseProtoMsg;
                };
                MsgDeleteAccount: {
                    typeUrl: string;
                    encode(message: _18.MsgDeleteAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgDeleteAccount;
                    fromPartial(object: Partial<_18.MsgDeleteAccount>): _18.MsgDeleteAccount;
                    fromAmino(object: _18.MsgDeleteAccountAmino): _18.MsgDeleteAccount;
                    toAmino(message: _18.MsgDeleteAccount): _18.MsgDeleteAccountAmino;
                    fromAminoMsg(object: _18.MsgDeleteAccountAminoMsg): _18.MsgDeleteAccount;
                    fromProtoMsg(message: _18.MsgDeleteAccountProtoMsg): _18.MsgDeleteAccount;
                    toProto(message: _18.MsgDeleteAccount): Uint8Array;
                    toProtoMsg(message: _18.MsgDeleteAccount): _18.MsgDeleteAccountProtoMsg;
                };
                MsgDeleteAccountResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgDeleteAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgDeleteAccountResponse;
                    fromPartial(_: Partial<_18.MsgDeleteAccountResponse>): _18.MsgDeleteAccountResponse;
                    fromAmino(_: _18.MsgDeleteAccountResponseAmino): _18.MsgDeleteAccountResponse;
                    toAmino(_: _18.MsgDeleteAccountResponse): _18.MsgDeleteAccountResponseAmino;
                    fromAminoMsg(object: _18.MsgDeleteAccountResponseAminoMsg): _18.MsgDeleteAccountResponse;
                    fromProtoMsg(message: _18.MsgDeleteAccountResponseProtoMsg): _18.MsgDeleteAccountResponse;
                    toProto(message: _18.MsgDeleteAccountResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgDeleteAccountResponse): _18.MsgDeleteAccountResponseProtoMsg;
                };
                MsgDeleteDomain: {
                    typeUrl: string;
                    encode(message: _18.MsgDeleteDomain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgDeleteDomain;
                    fromPartial(object: Partial<_18.MsgDeleteDomain>): _18.MsgDeleteDomain;
                    fromAmino(object: _18.MsgDeleteDomainAmino): _18.MsgDeleteDomain;
                    toAmino(message: _18.MsgDeleteDomain): _18.MsgDeleteDomainAmino;
                    fromAminoMsg(object: _18.MsgDeleteDomainAminoMsg): _18.MsgDeleteDomain;
                    fromProtoMsg(message: _18.MsgDeleteDomainProtoMsg): _18.MsgDeleteDomain;
                    toProto(message: _18.MsgDeleteDomain): Uint8Array;
                    toProtoMsg(message: _18.MsgDeleteDomain): _18.MsgDeleteDomainProtoMsg;
                };
                MsgDeleteDomainResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgDeleteDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgDeleteDomainResponse;
                    fromPartial(_: Partial<_18.MsgDeleteDomainResponse>): _18.MsgDeleteDomainResponse;
                    fromAmino(_: _18.MsgDeleteDomainResponseAmino): _18.MsgDeleteDomainResponse;
                    toAmino(_: _18.MsgDeleteDomainResponse): _18.MsgDeleteDomainResponseAmino;
                    fromAminoMsg(object: _18.MsgDeleteDomainResponseAminoMsg): _18.MsgDeleteDomainResponse;
                    fromProtoMsg(message: _18.MsgDeleteDomainResponseProtoMsg): _18.MsgDeleteDomainResponse;
                    toProto(message: _18.MsgDeleteDomainResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgDeleteDomainResponse): _18.MsgDeleteDomainResponseProtoMsg;
                };
                MsgRegisterAccount: {
                    typeUrl: string;
                    encode(message: _18.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgRegisterAccount;
                    fromPartial(object: Partial<_18.MsgRegisterAccount>): _18.MsgRegisterAccount;
                    fromAmino(object: _18.MsgRegisterAccountAmino): _18.MsgRegisterAccount;
                    toAmino(message: _18.MsgRegisterAccount): _18.MsgRegisterAccountAmino;
                    fromAminoMsg(object: _18.MsgRegisterAccountAminoMsg): _18.MsgRegisterAccount;
                    fromProtoMsg(message: _18.MsgRegisterAccountProtoMsg): _18.MsgRegisterAccount;
                    toProto(message: _18.MsgRegisterAccount): Uint8Array;
                    toProtoMsg(message: _18.MsgRegisterAccount): _18.MsgRegisterAccountProtoMsg;
                };
                MsgRegisterAccountResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgRegisterAccountResponse;
                    fromPartial(_: Partial<_18.MsgRegisterAccountResponse>): _18.MsgRegisterAccountResponse;
                    fromAmino(_: _18.MsgRegisterAccountResponseAmino): _18.MsgRegisterAccountResponse;
                    toAmino(_: _18.MsgRegisterAccountResponse): _18.MsgRegisterAccountResponseAmino;
                    fromAminoMsg(object: _18.MsgRegisterAccountResponseAminoMsg): _18.MsgRegisterAccountResponse;
                    fromProtoMsg(message: _18.MsgRegisterAccountResponseProtoMsg): _18.MsgRegisterAccountResponse;
                    toProto(message: _18.MsgRegisterAccountResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgRegisterAccountResponse): _18.MsgRegisterAccountResponseProtoMsg;
                };
                MsgRegisterDomain: {
                    typeUrl: string;
                    encode(message: _18.MsgRegisterDomain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgRegisterDomain;
                    fromPartial(object: Partial<_18.MsgRegisterDomain>): _18.MsgRegisterDomain;
                    fromAmino(object: _18.MsgRegisterDomainAmino): _18.MsgRegisterDomain;
                    toAmino(message: _18.MsgRegisterDomain): _18.MsgRegisterDomainAmino;
                    fromAminoMsg(object: _18.MsgRegisterDomainAminoMsg): _18.MsgRegisterDomain;
                    fromProtoMsg(message: _18.MsgRegisterDomainProtoMsg): _18.MsgRegisterDomain;
                    toProto(message: _18.MsgRegisterDomain): Uint8Array;
                    toProtoMsg(message: _18.MsgRegisterDomain): _18.MsgRegisterDomainProtoMsg;
                };
                MsgRegisterDomainResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgRegisterDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgRegisterDomainResponse;
                    fromPartial(_: Partial<_18.MsgRegisterDomainResponse>): _18.MsgRegisterDomainResponse;
                    fromAmino(_: _18.MsgRegisterDomainResponseAmino): _18.MsgRegisterDomainResponse;
                    toAmino(_: _18.MsgRegisterDomainResponse): _18.MsgRegisterDomainResponseAmino;
                    fromAminoMsg(object: _18.MsgRegisterDomainResponseAminoMsg): _18.MsgRegisterDomainResponse;
                    fromProtoMsg(message: _18.MsgRegisterDomainResponseProtoMsg): _18.MsgRegisterDomainResponse;
                    toProto(message: _18.MsgRegisterDomainResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgRegisterDomainResponse): _18.MsgRegisterDomainResponseProtoMsg;
                };
                MsgRenewAccount: {
                    typeUrl: string;
                    encode(message: _18.MsgRenewAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgRenewAccount;
                    fromPartial(object: Partial<_18.MsgRenewAccount>): _18.MsgRenewAccount;
                    fromAmino(object: _18.MsgRenewAccountAmino): _18.MsgRenewAccount;
                    toAmino(message: _18.MsgRenewAccount): _18.MsgRenewAccountAmino;
                    fromAminoMsg(object: _18.MsgRenewAccountAminoMsg): _18.MsgRenewAccount;
                    fromProtoMsg(message: _18.MsgRenewAccountProtoMsg): _18.MsgRenewAccount;
                    toProto(message: _18.MsgRenewAccount): Uint8Array;
                    toProtoMsg(message: _18.MsgRenewAccount): _18.MsgRenewAccountProtoMsg;
                };
                MsgRenewAccountResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgRenewAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgRenewAccountResponse;
                    fromPartial(_: Partial<_18.MsgRenewAccountResponse>): _18.MsgRenewAccountResponse;
                    fromAmino(_: _18.MsgRenewAccountResponseAmino): _18.MsgRenewAccountResponse;
                    toAmino(_: _18.MsgRenewAccountResponse): _18.MsgRenewAccountResponseAmino;
                    fromAminoMsg(object: _18.MsgRenewAccountResponseAminoMsg): _18.MsgRenewAccountResponse;
                    fromProtoMsg(message: _18.MsgRenewAccountResponseProtoMsg): _18.MsgRenewAccountResponse;
                    toProto(message: _18.MsgRenewAccountResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgRenewAccountResponse): _18.MsgRenewAccountResponseProtoMsg;
                };
                MsgRenewDomain: {
                    typeUrl: string;
                    encode(message: _18.MsgRenewDomain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgRenewDomain;
                    fromPartial(object: Partial<_18.MsgRenewDomain>): _18.MsgRenewDomain;
                    fromAmino(object: _18.MsgRenewDomainAmino): _18.MsgRenewDomain;
                    toAmino(message: _18.MsgRenewDomain): _18.MsgRenewDomainAmino;
                    fromAminoMsg(object: _18.MsgRenewDomainAminoMsg): _18.MsgRenewDomain;
                    fromProtoMsg(message: _18.MsgRenewDomainProtoMsg): _18.MsgRenewDomain;
                    toProto(message: _18.MsgRenewDomain): Uint8Array;
                    toProtoMsg(message: _18.MsgRenewDomain): _18.MsgRenewDomainProtoMsg;
                };
                MsgRenewDomainResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgRenewDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgRenewDomainResponse;
                    fromPartial(_: Partial<_18.MsgRenewDomainResponse>): _18.MsgRenewDomainResponse;
                    fromAmino(_: _18.MsgRenewDomainResponseAmino): _18.MsgRenewDomainResponse;
                    toAmino(_: _18.MsgRenewDomainResponse): _18.MsgRenewDomainResponseAmino;
                    fromAminoMsg(object: _18.MsgRenewDomainResponseAminoMsg): _18.MsgRenewDomainResponse;
                    fromProtoMsg(message: _18.MsgRenewDomainResponseProtoMsg): _18.MsgRenewDomainResponse;
                    toProto(message: _18.MsgRenewDomainResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgRenewDomainResponse): _18.MsgRenewDomainResponseProtoMsg;
                };
                MsgReplaceAccountResources: {
                    typeUrl: string;
                    encode(message: _18.MsgReplaceAccountResources, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgReplaceAccountResources;
                    fromPartial(object: Partial<_18.MsgReplaceAccountResources>): _18.MsgReplaceAccountResources;
                    fromAmino(object: _18.MsgReplaceAccountResourcesAmino): _18.MsgReplaceAccountResources;
                    toAmino(message: _18.MsgReplaceAccountResources): _18.MsgReplaceAccountResourcesAmino;
                    fromAminoMsg(object: _18.MsgReplaceAccountResourcesAminoMsg): _18.MsgReplaceAccountResources;
                    fromProtoMsg(message: _18.MsgReplaceAccountResourcesProtoMsg): _18.MsgReplaceAccountResources;
                    toProto(message: _18.MsgReplaceAccountResources): Uint8Array;
                    toProtoMsg(message: _18.MsgReplaceAccountResources): _18.MsgReplaceAccountResourcesProtoMsg;
                };
                MsgReplaceAccountResourcesResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgReplaceAccountResourcesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgReplaceAccountResourcesResponse;
                    fromPartial(_: Partial<_18.MsgReplaceAccountResourcesResponse>): _18.MsgReplaceAccountResourcesResponse;
                    fromAmino(_: _18.MsgReplaceAccountResourcesResponseAmino): _18.MsgReplaceAccountResourcesResponse;
                    toAmino(_: _18.MsgReplaceAccountResourcesResponse): _18.MsgReplaceAccountResourcesResponseAmino;
                    fromAminoMsg(object: _18.MsgReplaceAccountResourcesResponseAminoMsg): _18.MsgReplaceAccountResourcesResponse;
                    fromProtoMsg(message: _18.MsgReplaceAccountResourcesResponseProtoMsg): _18.MsgReplaceAccountResourcesResponse;
                    toProto(message: _18.MsgReplaceAccountResourcesResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgReplaceAccountResourcesResponse): _18.MsgReplaceAccountResourcesResponseProtoMsg;
                };
                MsgReplaceAccountMetadata: {
                    typeUrl: string;
                    encode(message: _18.MsgReplaceAccountMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgReplaceAccountMetadata;
                    fromPartial(object: Partial<_18.MsgReplaceAccountMetadata>): _18.MsgReplaceAccountMetadata;
                    fromAmino(object: _18.MsgReplaceAccountMetadataAmino): _18.MsgReplaceAccountMetadata;
                    toAmino(message: _18.MsgReplaceAccountMetadata): _18.MsgReplaceAccountMetadataAmino;
                    fromAminoMsg(object: _18.MsgReplaceAccountMetadataAminoMsg): _18.MsgReplaceAccountMetadata;
                    fromProtoMsg(message: _18.MsgReplaceAccountMetadataProtoMsg): _18.MsgReplaceAccountMetadata;
                    toProto(message: _18.MsgReplaceAccountMetadata): Uint8Array;
                    toProtoMsg(message: _18.MsgReplaceAccountMetadata): _18.MsgReplaceAccountMetadataProtoMsg;
                };
                MsgReplaceAccountMetadataResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgReplaceAccountMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgReplaceAccountMetadataResponse;
                    fromPartial(_: Partial<_18.MsgReplaceAccountMetadataResponse>): _18.MsgReplaceAccountMetadataResponse;
                    fromAmino(_: _18.MsgReplaceAccountMetadataResponseAmino): _18.MsgReplaceAccountMetadataResponse;
                    toAmino(_: _18.MsgReplaceAccountMetadataResponse): _18.MsgReplaceAccountMetadataResponseAmino;
                    fromAminoMsg(object: _18.MsgReplaceAccountMetadataResponseAminoMsg): _18.MsgReplaceAccountMetadataResponse;
                    fromProtoMsg(message: _18.MsgReplaceAccountMetadataResponseProtoMsg): _18.MsgReplaceAccountMetadataResponse;
                    toProto(message: _18.MsgReplaceAccountMetadataResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgReplaceAccountMetadataResponse): _18.MsgReplaceAccountMetadataResponseProtoMsg;
                };
                MsgTransferAccount: {
                    typeUrl: string;
                    encode(message: _18.MsgTransferAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgTransferAccount;
                    fromPartial(object: Partial<_18.MsgTransferAccount>): _18.MsgTransferAccount;
                    fromAmino(object: _18.MsgTransferAccountAmino): _18.MsgTransferAccount;
                    toAmino(message: _18.MsgTransferAccount): _18.MsgTransferAccountAmino;
                    fromAminoMsg(object: _18.MsgTransferAccountAminoMsg): _18.MsgTransferAccount;
                    fromProtoMsg(message: _18.MsgTransferAccountProtoMsg): _18.MsgTransferAccount;
                    toProto(message: _18.MsgTransferAccount): Uint8Array;
                    toProtoMsg(message: _18.MsgTransferAccount): _18.MsgTransferAccountProtoMsg;
                };
                MsgTransferAccountResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgTransferAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgTransferAccountResponse;
                    fromPartial(_: Partial<_18.MsgTransferAccountResponse>): _18.MsgTransferAccountResponse;
                    fromAmino(_: _18.MsgTransferAccountResponseAmino): _18.MsgTransferAccountResponse;
                    toAmino(_: _18.MsgTransferAccountResponse): _18.MsgTransferAccountResponseAmino;
                    fromAminoMsg(object: _18.MsgTransferAccountResponseAminoMsg): _18.MsgTransferAccountResponse;
                    fromProtoMsg(message: _18.MsgTransferAccountResponseProtoMsg): _18.MsgTransferAccountResponse;
                    toProto(message: _18.MsgTransferAccountResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgTransferAccountResponse): _18.MsgTransferAccountResponseProtoMsg;
                };
                MsgTransferDomain: {
                    typeUrl: string;
                    encode(message: _18.MsgTransferDomain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgTransferDomain;
                    fromPartial(object: Partial<_18.MsgTransferDomain>): _18.MsgTransferDomain;
                    fromAmino(object: _18.MsgTransferDomainAmino): _18.MsgTransferDomain;
                    toAmino(message: _18.MsgTransferDomain): _18.MsgTransferDomainAmino;
                    fromAminoMsg(object: _18.MsgTransferDomainAminoMsg): _18.MsgTransferDomain;
                    fromProtoMsg(message: _18.MsgTransferDomainProtoMsg): _18.MsgTransferDomain;
                    toProto(message: _18.MsgTransferDomain): Uint8Array;
                    toProtoMsg(message: _18.MsgTransferDomain): _18.MsgTransferDomainProtoMsg;
                };
                MsgTransferDomainResponse: {
                    typeUrl: string;
                    encode(_: _18.MsgTransferDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.MsgTransferDomainResponse;
                    fromPartial(_: Partial<_18.MsgTransferDomainResponse>): _18.MsgTransferDomainResponse;
                    fromAmino(_: _18.MsgTransferDomainResponseAmino): _18.MsgTransferDomainResponse;
                    toAmino(_: _18.MsgTransferDomainResponse): _18.MsgTransferDomainResponseAmino;
                    fromAminoMsg(object: _18.MsgTransferDomainResponseAminoMsg): _18.MsgTransferDomainResponse;
                    fromProtoMsg(message: _18.MsgTransferDomainResponseProtoMsg): _18.MsgTransferDomainResponse;
                    toProto(message: _18.MsgTransferDomainResponse): Uint8Array;
                    toProtoMsg(message: _18.MsgTransferDomainResponse): _18.MsgTransferDomainResponseProtoMsg;
                };
                QueryDomainRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryDomainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDomainRequest;
                    fromPartial(object: Partial<_17.QueryDomainRequest>): _17.QueryDomainRequest;
                    fromAmino(object: _17.QueryDomainRequestAmino): _17.QueryDomainRequest;
                    toAmino(message: _17.QueryDomainRequest): _17.QueryDomainRequestAmino;
                    fromAminoMsg(object: _17.QueryDomainRequestAminoMsg): _17.QueryDomainRequest;
                    fromProtoMsg(message: _17.QueryDomainRequestProtoMsg): _17.QueryDomainRequest;
                    toProto(message: _17.QueryDomainRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryDomainRequest): _17.QueryDomainRequestProtoMsg;
                };
                QueryDomainResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDomainResponse;
                    fromPartial(object: Partial<_17.QueryDomainResponse>): _17.QueryDomainResponse;
                    fromAmino(object: _17.QueryDomainResponseAmino): _17.QueryDomainResponse;
                    toAmino(message: _17.QueryDomainResponse): _17.QueryDomainResponseAmino;
                    fromAminoMsg(object: _17.QueryDomainResponseAminoMsg): _17.QueryDomainResponse;
                    fromProtoMsg(message: _17.QueryDomainResponseProtoMsg): _17.QueryDomainResponse;
                    toProto(message: _17.QueryDomainResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryDomainResponse): _17.QueryDomainResponseProtoMsg;
                };
                QueryDomainAccountsRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryDomainAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDomainAccountsRequest;
                    fromPartial(object: Partial<_17.QueryDomainAccountsRequest>): _17.QueryDomainAccountsRequest;
                    fromAmino(object: _17.QueryDomainAccountsRequestAmino): _17.QueryDomainAccountsRequest;
                    toAmino(message: _17.QueryDomainAccountsRequest): _17.QueryDomainAccountsRequestAmino;
                    fromAminoMsg(object: _17.QueryDomainAccountsRequestAminoMsg): _17.QueryDomainAccountsRequest;
                    fromProtoMsg(message: _17.QueryDomainAccountsRequestProtoMsg): _17.QueryDomainAccountsRequest;
                    toProto(message: _17.QueryDomainAccountsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryDomainAccountsRequest): _17.QueryDomainAccountsRequestProtoMsg;
                };
                QueryDomainAccountsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryDomainAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryDomainAccountsResponse;
                    fromPartial(object: Partial<_17.QueryDomainAccountsResponse>): _17.QueryDomainAccountsResponse;
                    fromAmino(object: _17.QueryDomainAccountsResponseAmino): _17.QueryDomainAccountsResponse;
                    toAmino(message: _17.QueryDomainAccountsResponse): _17.QueryDomainAccountsResponseAmino;
                    fromAminoMsg(object: _17.QueryDomainAccountsResponseAminoMsg): _17.QueryDomainAccountsResponse;
                    fromProtoMsg(message: _17.QueryDomainAccountsResponseProtoMsg): _17.QueryDomainAccountsResponse;
                    toProto(message: _17.QueryDomainAccountsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryDomainAccountsResponse): _17.QueryDomainAccountsResponseProtoMsg;
                };
                QueryStarnameRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryStarnameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryStarnameRequest;
                    fromPartial(object: Partial<_17.QueryStarnameRequest>): _17.QueryStarnameRequest;
                    fromAmino(object: _17.QueryStarnameRequestAmino): _17.QueryStarnameRequest;
                    toAmino(message: _17.QueryStarnameRequest): _17.QueryStarnameRequestAmino;
                    fromAminoMsg(object: _17.QueryStarnameRequestAminoMsg): _17.QueryStarnameRequest;
                    fromProtoMsg(message: _17.QueryStarnameRequestProtoMsg): _17.QueryStarnameRequest;
                    toProto(message: _17.QueryStarnameRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryStarnameRequest): _17.QueryStarnameRequestProtoMsg;
                };
                QueryStarnameResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryStarnameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryStarnameResponse;
                    fromPartial(object: Partial<_17.QueryStarnameResponse>): _17.QueryStarnameResponse;
                    fromAmino(object: _17.QueryStarnameResponseAmino): _17.QueryStarnameResponse;
                    toAmino(message: _17.QueryStarnameResponse): _17.QueryStarnameResponseAmino;
                    fromAminoMsg(object: _17.QueryStarnameResponseAminoMsg): _17.QueryStarnameResponse;
                    fromProtoMsg(message: _17.QueryStarnameResponseProtoMsg): _17.QueryStarnameResponse;
                    toProto(message: _17.QueryStarnameResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryStarnameResponse): _17.QueryStarnameResponseProtoMsg;
                };
                QueryOwnerAccountsRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryOwnerAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryOwnerAccountsRequest;
                    fromPartial(object: Partial<_17.QueryOwnerAccountsRequest>): _17.QueryOwnerAccountsRequest;
                    fromAmino(object: _17.QueryOwnerAccountsRequestAmino): _17.QueryOwnerAccountsRequest;
                    toAmino(message: _17.QueryOwnerAccountsRequest): _17.QueryOwnerAccountsRequestAmino;
                    fromAminoMsg(object: _17.QueryOwnerAccountsRequestAminoMsg): _17.QueryOwnerAccountsRequest;
                    fromProtoMsg(message: _17.QueryOwnerAccountsRequestProtoMsg): _17.QueryOwnerAccountsRequest;
                    toProto(message: _17.QueryOwnerAccountsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryOwnerAccountsRequest): _17.QueryOwnerAccountsRequestProtoMsg;
                };
                QueryOwnerAccountsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryOwnerAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryOwnerAccountsResponse;
                    fromPartial(object: Partial<_17.QueryOwnerAccountsResponse>): _17.QueryOwnerAccountsResponse;
                    fromAmino(object: _17.QueryOwnerAccountsResponseAmino): _17.QueryOwnerAccountsResponse;
                    toAmino(message: _17.QueryOwnerAccountsResponse): _17.QueryOwnerAccountsResponseAmino;
                    fromAminoMsg(object: _17.QueryOwnerAccountsResponseAminoMsg): _17.QueryOwnerAccountsResponse;
                    fromProtoMsg(message: _17.QueryOwnerAccountsResponseProtoMsg): _17.QueryOwnerAccountsResponse;
                    toProto(message: _17.QueryOwnerAccountsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryOwnerAccountsResponse): _17.QueryOwnerAccountsResponseProtoMsg;
                };
                QueryOwnerDomainsRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryOwnerDomainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryOwnerDomainsRequest;
                    fromPartial(object: Partial<_17.QueryOwnerDomainsRequest>): _17.QueryOwnerDomainsRequest;
                    fromAmino(object: _17.QueryOwnerDomainsRequestAmino): _17.QueryOwnerDomainsRequest;
                    toAmino(message: _17.QueryOwnerDomainsRequest): _17.QueryOwnerDomainsRequestAmino;
                    fromAminoMsg(object: _17.QueryOwnerDomainsRequestAminoMsg): _17.QueryOwnerDomainsRequest;
                    fromProtoMsg(message: _17.QueryOwnerDomainsRequestProtoMsg): _17.QueryOwnerDomainsRequest;
                    toProto(message: _17.QueryOwnerDomainsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryOwnerDomainsRequest): _17.QueryOwnerDomainsRequestProtoMsg;
                };
                QueryOwnerDomainsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryOwnerDomainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryOwnerDomainsResponse;
                    fromPartial(object: Partial<_17.QueryOwnerDomainsResponse>): _17.QueryOwnerDomainsResponse;
                    fromAmino(object: _17.QueryOwnerDomainsResponseAmino): _17.QueryOwnerDomainsResponse;
                    toAmino(message: _17.QueryOwnerDomainsResponse): _17.QueryOwnerDomainsResponseAmino;
                    fromAminoMsg(object: _17.QueryOwnerDomainsResponseAminoMsg): _17.QueryOwnerDomainsResponse;
                    fromProtoMsg(message: _17.QueryOwnerDomainsResponseProtoMsg): _17.QueryOwnerDomainsResponse;
                    toProto(message: _17.QueryOwnerDomainsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryOwnerDomainsResponse): _17.QueryOwnerDomainsResponseProtoMsg;
                };
                QueryResourceAccountsRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryResourceAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryResourceAccountsRequest;
                    fromPartial(object: Partial<_17.QueryResourceAccountsRequest>): _17.QueryResourceAccountsRequest;
                    fromAmino(object: _17.QueryResourceAccountsRequestAmino): _17.QueryResourceAccountsRequest;
                    toAmino(message: _17.QueryResourceAccountsRequest): _17.QueryResourceAccountsRequestAmino;
                    fromAminoMsg(object: _17.QueryResourceAccountsRequestAminoMsg): _17.QueryResourceAccountsRequest;
                    fromProtoMsg(message: _17.QueryResourceAccountsRequestProtoMsg): _17.QueryResourceAccountsRequest;
                    toProto(message: _17.QueryResourceAccountsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryResourceAccountsRequest): _17.QueryResourceAccountsRequestProtoMsg;
                };
                QueryResourceAccountsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryResourceAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryResourceAccountsResponse;
                    fromPartial(object: Partial<_17.QueryResourceAccountsResponse>): _17.QueryResourceAccountsResponse;
                    fromAmino(object: _17.QueryResourceAccountsResponseAmino): _17.QueryResourceAccountsResponse;
                    toAmino(message: _17.QueryResourceAccountsResponse): _17.QueryResourceAccountsResponseAmino;
                    fromAminoMsg(object: _17.QueryResourceAccountsResponseAminoMsg): _17.QueryResourceAccountsResponse;
                    fromProtoMsg(message: _17.QueryResourceAccountsResponseProtoMsg): _17.QueryResourceAccountsResponse;
                    toProto(message: _17.QueryResourceAccountsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryResourceAccountsResponse): _17.QueryResourceAccountsResponseProtoMsg;
                };
                QueryBrokerAccountsRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryBrokerAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryBrokerAccountsRequest;
                    fromPartial(object: Partial<_17.QueryBrokerAccountsRequest>): _17.QueryBrokerAccountsRequest;
                    fromAmino(object: _17.QueryBrokerAccountsRequestAmino): _17.QueryBrokerAccountsRequest;
                    toAmino(message: _17.QueryBrokerAccountsRequest): _17.QueryBrokerAccountsRequestAmino;
                    fromAminoMsg(object: _17.QueryBrokerAccountsRequestAminoMsg): _17.QueryBrokerAccountsRequest;
                    fromProtoMsg(message: _17.QueryBrokerAccountsRequestProtoMsg): _17.QueryBrokerAccountsRequest;
                    toProto(message: _17.QueryBrokerAccountsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryBrokerAccountsRequest): _17.QueryBrokerAccountsRequestProtoMsg;
                };
                QueryBrokerAccountsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryBrokerAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryBrokerAccountsResponse;
                    fromPartial(object: Partial<_17.QueryBrokerAccountsResponse>): _17.QueryBrokerAccountsResponse;
                    fromAmino(object: _17.QueryBrokerAccountsResponseAmino): _17.QueryBrokerAccountsResponse;
                    toAmino(message: _17.QueryBrokerAccountsResponse): _17.QueryBrokerAccountsResponseAmino;
                    fromAminoMsg(object: _17.QueryBrokerAccountsResponseAminoMsg): _17.QueryBrokerAccountsResponse;
                    fromProtoMsg(message: _17.QueryBrokerAccountsResponseProtoMsg): _17.QueryBrokerAccountsResponse;
                    toProto(message: _17.QueryBrokerAccountsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryBrokerAccountsResponse): _17.QueryBrokerAccountsResponseProtoMsg;
                };
                QueryBrokerDomainsRequest: {
                    typeUrl: string;
                    encode(message: _17.QueryBrokerDomainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryBrokerDomainsRequest;
                    fromPartial(object: Partial<_17.QueryBrokerDomainsRequest>): _17.QueryBrokerDomainsRequest;
                    fromAmino(object: _17.QueryBrokerDomainsRequestAmino): _17.QueryBrokerDomainsRequest;
                    toAmino(message: _17.QueryBrokerDomainsRequest): _17.QueryBrokerDomainsRequestAmino;
                    fromAminoMsg(object: _17.QueryBrokerDomainsRequestAminoMsg): _17.QueryBrokerDomainsRequest;
                    fromProtoMsg(message: _17.QueryBrokerDomainsRequestProtoMsg): _17.QueryBrokerDomainsRequest;
                    toProto(message: _17.QueryBrokerDomainsRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryBrokerDomainsRequest): _17.QueryBrokerDomainsRequestProtoMsg;
                };
                QueryBrokerDomainsResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryBrokerDomainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryBrokerDomainsResponse;
                    fromPartial(object: Partial<_17.QueryBrokerDomainsResponse>): _17.QueryBrokerDomainsResponse;
                    fromAmino(object: _17.QueryBrokerDomainsResponseAmino): _17.QueryBrokerDomainsResponse;
                    toAmino(message: _17.QueryBrokerDomainsResponse): _17.QueryBrokerDomainsResponseAmino;
                    fromAminoMsg(object: _17.QueryBrokerDomainsResponseAminoMsg): _17.QueryBrokerDomainsResponse;
                    fromProtoMsg(message: _17.QueryBrokerDomainsResponseProtoMsg): _17.QueryBrokerDomainsResponse;
                    toProto(message: _17.QueryBrokerDomainsResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryBrokerDomainsResponse): _17.QueryBrokerDomainsResponseProtoMsg;
                };
                QueryYieldRequest: {
                    typeUrl: string;
                    encode(_: _17.QueryYieldRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.QueryYieldRequest;
                    fromPartial(_: Partial<_17.QueryYieldRequest>): _17.QueryYieldRequest;
                    fromAmino(_: _17.QueryYieldRequestAmino): _17.QueryYieldRequest;
                    toAmino(_: _17.QueryYieldRequest): _17.QueryYieldRequestAmino;
                    fromAminoMsg(object: _17.QueryYieldRequestAminoMsg): _17.QueryYieldRequest;
                    fromProtoMsg(message: _17.QueryYieldRequestProtoMsg): _17.QueryYieldRequest;
                    toProto(message: _17.QueryYieldRequest): Uint8Array;
                    toProtoMsg(message: _17.QueryYieldRequest): _17.QueryYieldRequestProtoMsg;
                };
                QueryYieldResponse: {
                    typeUrl: string;
                    encode(message: _17.QueryYieldResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.QueryYieldResponse;
                    fromPartial(object: Partial<_17.QueryYieldResponse>): _17.QueryYieldResponse;
                    fromAmino(object: _17.QueryYieldResponseAmino): _17.QueryYieldResponse;
                    toAmino(message: _17.QueryYieldResponse): _17.QueryYieldResponseAmino;
                    fromAminoMsg(object: _17.QueryYieldResponseAminoMsg): _17.QueryYieldResponse;
                    fromProtoMsg(message: _17.QueryYieldResponseProtoMsg): _17.QueryYieldResponse;
                    toProto(message: _17.QueryYieldResponse): Uint8Array;
                    toProtoMsg(message: _17.QueryYieldResponse): _17.QueryYieldResponseProtoMsg;
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
            starnamed: {
                x: {
                    escrow: {
                        v1beta1: _149.MsgClientImpl;
                    };
                    starname: {
                        v1beta1: _150.MsgClientImpl;
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
            starnamed: {
                x: {
                    configuration: {
                        v1beta1: {
                            config(request?: _7.QueryConfigRequest): Promise<_7.QueryConfigResponse>;
                            fees(request?: _7.QueryFeesRequest): Promise<_7.QueryFeesResponse>;
                        };
                    };
                    escrow: {
                        v1beta1: {
                            escrow(request: _12.QueryEscrowRequest): Promise<_12.QueryEscrowResponse>;
                            escrows(request: _12.QueryEscrowsRequest): Promise<_12.QueryEscrowsResponse>;
                        };
                    };
                    starname: {
                        v1beta1: {
                            domain(request: _17.QueryDomainRequest): Promise<_17.QueryDomainResponse>;
                            domainAccounts(request: _17.QueryDomainAccountsRequest): Promise<_17.QueryDomainAccountsResponse>;
                            starname(request: _17.QueryStarnameRequest): Promise<_17.QueryStarnameResponse>;
                            ownerAccounts(request: _17.QueryOwnerAccountsRequest): Promise<_17.QueryOwnerAccountsResponse>;
                            ownerDomains(request: _17.QueryOwnerDomainsRequest): Promise<_17.QueryOwnerDomainsResponse>;
                            resourceAccounts(request: _17.QueryResourceAccountsRequest): Promise<_17.QueryResourceAccountsResponse>;
                            brokerAccounts(request: _17.QueryBrokerAccountsRequest): Promise<_17.QueryBrokerAccountsResponse>;
                            brokerDomains(request: _17.QueryBrokerDomainsRequest): Promise<_17.QueryBrokerDomainsResponse>;
                            yield(request?: _17.QueryYieldRequest): Promise<_17.QueryYieldResponse>;
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
            starnamed: {
                x: {
                    configuration: {
                        v1beta1: _143.LCDQueryClient;
                    };
                    escrow: {
                        v1beta1: _144.LCDQueryClient;
                    };
                    starname: {
                        v1beta1: _145.LCDQueryClient;
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
