import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./auth/v1beta1/auth";
import * as _44 from "./auth/v1beta1/genesis";
import * as _45 from "./auth/v1beta1/query";
import * as _46 from "./authz/v1beta1/authz";
import * as _47 from "./authz/v1beta1/event";
import * as _48 from "./authz/v1beta1/genesis";
import * as _49 from "./authz/v1beta1/query";
import * as _50 from "./authz/v1beta1/tx";
import * as _51 from "./bank/v1beta1/authz";
import * as _52 from "./bank/v1beta1/bank";
import * as _53 from "./bank/v1beta1/genesis";
import * as _54 from "./bank/v1beta1/query";
import * as _55 from "./bank/v1beta1/tx";
import * as _56 from "./capability/v1beta1/capability";
import * as _57 from "./capability/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/tx";
import * as _60 from "./crypto/ed25519/keys";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/v1beta1/distribution";
import * as _65 from "./distribution/v1beta1/genesis";
import * as _66 from "./distribution/v1beta1/query";
import * as _67 from "./distribution/v1beta1/tx";
import * as _68 from "./evidence/v1beta1/evidence";
import * as _69 from "./evidence/v1beta1/genesis";
import * as _70 from "./evidence/v1beta1/query";
import * as _71 from "./evidence/v1beta1/tx";
import * as _72 from "./feegrant/v1beta1/feegrant";
import * as _73 from "./feegrant/v1beta1/genesis";
import * as _74 from "./feegrant/v1beta1/query";
import * as _75 from "./feegrant/v1beta1/tx";
import * as _76 from "./genutil/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/genesis";
import * as _78 from "./gov/v1beta1/gov";
import * as _79 from "./gov/v1beta1/query";
import * as _80 from "./gov/v1beta1/tx";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./vesting/v1beta1/tx";
import * as _101 from "./vesting/v1beta1/vesting";
import * as _165 from "./auth/v1beta1/query.lcd";
import * as _166 from "./authz/v1beta1/query.lcd";
import * as _167 from "./bank/v1beta1/query.lcd";
import * as _168 from "./base/node/v1beta1/query.lcd";
import * as _169 from "./base/tendermint/v1beta1/query.lcd";
import * as _170 from "./distribution/v1beta1/query.lcd";
import * as _171 from "./evidence/v1beta1/query.lcd";
import * as _172 from "./feegrant/v1beta1/query.lcd";
import * as _173 from "./gov/v1beta1/query.lcd";
import * as _174 from "./mint/v1beta1/query.lcd";
import * as _175 from "./params/v1beta1/query.lcd";
import * as _176 from "./slashing/v1beta1/query.lcd";
import * as _177 from "./staking/v1beta1/query.lcd";
import * as _178 from "./tx/v1beta1/service.lcd";
import * as _179 from "./upgrade/v1beta1/query.lcd";
import * as _180 from "./auth/v1beta1/query.rpc.Query";
import * as _181 from "./authz/v1beta1/query.rpc.Query";
import * as _182 from "./bank/v1beta1/query.rpc.Query";
import * as _183 from "./base/node/v1beta1/query.rpc.Service";
import * as _184 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _185 from "./distribution/v1beta1/query.rpc.Query";
import * as _186 from "./evidence/v1beta1/query.rpc.Query";
import * as _187 from "./feegrant/v1beta1/query.rpc.Query";
import * as _188 from "./gov/v1beta1/query.rpc.Query";
import * as _189 from "./mint/v1beta1/query.rpc.Query";
import * as _190 from "./params/v1beta1/query.rpc.Query";
import * as _191 from "./slashing/v1beta1/query.rpc.Query";
import * as _192 from "./staking/v1beta1/query.rpc.Query";
import * as _193 from "./tx/v1beta1/service.rpc.Service";
import * as _194 from "./upgrade/v1beta1/query.rpc.Query";
import * as _195 from "./authz/v1beta1/tx.rpc.msg";
import * as _196 from "./bank/v1beta1/tx.rpc.msg";
import * as _197 from "./crisis/v1beta1/tx.rpc.msg";
import * as _198 from "./distribution/v1beta1/tx.rpc.msg";
import * as _199 from "./evidence/v1beta1/tx.rpc.msg";
import * as _200 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _201 from "./gov/v1beta1/tx.rpc.msg";
import * as _202 from "./slashing/v1beta1/tx.rpc.msg";
import * as _203 from "./staking/v1beta1/tx.rpc.msg";
import * as _204 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace base {
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _32.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.PageRequest;
                    fromPartial(object: Partial<_32.PageRequest>): _32.PageRequest;
                };
                PageResponse: {
                    encode(message: _32.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _32.PageResponse;
                    fromPartial(object: Partial<_32.PageResponse>): _32.PageResponse;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _33.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Coin;
                fromPartial(object: Partial<_33.Coin>): _33.Coin;
            };
            DecCoin: {
                encode(message: _33.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.DecCoin;
                fromPartial(object: Partial<_33.DecCoin>): _33.DecCoin;
            };
            IntProto: {
                encode(message: _33.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.IntProto;
                fromPartial(object: Partial<_33.IntProto>): _33.IntProto;
            };
            DecProto: {
                encode(message: _33.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.DecProto;
                fromPartial(object: Partial<_33.DecProto>): _33.DecProto;
            };
        };
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _34.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.TxResponse;
                    fromPartial(object: Partial<_34.TxResponse>): _34.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _34.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    fromPartial(object: Partial<_34.ABCIMessageLog>): _34.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _34.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.StringEvent;
                    fromPartial(object: Partial<_34.StringEvent>): _34.StringEvent;
                };
                Attribute: {
                    encode(message: _34.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Attribute;
                    fromPartial(object: Partial<_34.Attribute>): _34.Attribute;
                };
                GasInfo: {
                    encode(message: _34.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.GasInfo;
                    fromPartial(object: Partial<_34.GasInfo>): _34.GasInfo;
                };
                Result: {
                    encode(message: _34.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.Result;
                    fromPartial(object: Partial<_34.Result>): _34.Result;
                };
                SimulationResponse: {
                    encode(message: _34.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SimulationResponse;
                    fromPartial(object: Partial<_34.SimulationResponse>): _34.SimulationResponse;
                };
                MsgData: {
                    encode(message: _34.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.MsgData;
                    fromPartial(object: Partial<_34.MsgData>): _34.MsgData;
                };
                TxMsgData: {
                    encode(message: _34.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.TxMsgData;
                    fromPartial(object: Partial<_34.TxMsgData>): _34.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _34.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _34.SearchTxsResult;
                    fromPartial(object: Partial<_34.SearchTxsResult>): _34.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _35.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Pairs;
                    fromPartial(object: Partial<_35.Pairs>): _35.Pairs;
                };
                Pair: {
                    encode(message: _35.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _35.Pair;
                    fromPartial(object: Partial<_35.Pair>): _35.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _183.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                };
                LCDQueryClient: typeof _168.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _36.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _36.ConfigRequest;
                    fromPartial(_: Partial<_36.ConfigRequest>): _36.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _36.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _36.ConfigResponse;
                    fromPartial(object: Partial<_36.ConfigResponse>): _36.ConfigResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _37.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_37.ListAllInterfacesRequest>): _37.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_37.ListAllInterfacesResponse>): _37.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _37.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ListImplementationsRequest;
                    fromPartial(object: Partial<_37.ListImplementationsRequest>): _37.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _37.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _37.ListImplementationsResponse;
                    fromPartial(object: Partial<_37.ListImplementationsResponse>): _37.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _38.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.AppDescriptor;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _38.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.TxDescriptor;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _38.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _38.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _38.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ChainDescriptor;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _38.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.CodecDescriptor;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _38.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _38.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _38.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.MsgDescriptor;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _38.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _38.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _38.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _39.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.Snapshot;
                    fromPartial(object: Partial<_39.Snapshot>): _39.Snapshot;
                };
                Metadata: {
                    encode(message: _39.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.Metadata;
                    fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                };
                SnapshotItem: {
                    encode(message: _39.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotItem;
                    fromPartial(object: Partial<_39.SnapshotItem>): _39.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _39.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotStoreItem;
                    fromPartial(object: Partial<_39.SnapshotStoreItem>): _39.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _39.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotIAVLItem;
                    fromPartial(object: Partial<_39.SnapshotIAVLItem>): _39.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_39.SnapshotExtensionMeta>): _39.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _39.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_39.SnapshotExtensionPayload>): _39.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _41.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.StoreKVPair;
                    fromPartial(object: Partial<_41.StoreKVPair>): _41.StoreKVPair;
                };
                BlockMetadata: {
                    encode(message: _41.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.BlockMetadata;
                    fromPartial(object: Partial<_41.BlockMetadata>): _41.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _41.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _41.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_41.BlockMetadata_DeliverTx>): _41.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _40.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.CommitInfo;
                    fromPartial(object: Partial<_40.CommitInfo>): _40.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _40.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.StoreInfo;
                    fromPartial(object: Partial<_40.StoreInfo>): _40.StoreInfo;
                };
                CommitID: {
                    encode(message: _40.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _40.CommitID;
                    fromPartial(object: Partial<_40.CommitID>): _40.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _184.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                    getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                    getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                    getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _169.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _42.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightRequest>): _42.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _42.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightResponse>): _42.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _42.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetRequest>): _42.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _42.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetResponse>): _42.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _42.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.Validator;
                    fromPartial(object: Partial<_42.Validator>): _42.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _42.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_42.GetBlockByHeightRequest>): _42.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _42.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_42.GetBlockByHeightResponse>): _42.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _42.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetLatestBlockRequest;
                    fromPartial(_: Partial<_42.GetLatestBlockRequest>): _42.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _42.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetLatestBlockResponse;
                    fromPartial(object: Partial<_42.GetLatestBlockResponse>): _42.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _42.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetSyncingRequest;
                    fromPartial(_: Partial<_42.GetSyncingRequest>): _42.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _42.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetSyncingResponse;
                    fromPartial(object: Partial<_42.GetSyncingResponse>): _42.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _42.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _42.GetNodeInfoRequest;
                    fromPartial(_: Partial<_42.GetNodeInfoRequest>): _42.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _42.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.GetNodeInfoResponse;
                    fromPartial(object: Partial<_42.GetNodeInfoResponse>): _42.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _42.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.VersionInfo;
                    fromPartial(object: Partial<_42.VersionInfo>): _42.VersionInfo;
                };
                Module: {
                    encode(message: _42.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _42.Module;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                };
            };
        }
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _45.QueryAccountsRequest): Promise<_45.QueryAccountsResponse>;
                account(request: _45.QueryAccountRequest): Promise<_45.QueryAccountResponse>;
                params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                moduleAccountByName(request: _45.QueryModuleAccountByNameRequest): Promise<_45.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _45.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountsRequest;
                fromPartial(object: Partial<_45.QueryAccountsRequest>): _45.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _45.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountsResponse;
                fromPartial(object: Partial<_45.QueryAccountsResponse>): _45.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _45.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountRequest;
                fromPartial(object: Partial<_45.QueryAccountRequest>): _45.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _45.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryAccountResponse;
                fromPartial(object: Partial<_45.QueryAccountResponse>): _45.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _45.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _45.QueryParamsRequest;
                fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _45.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryParamsResponse;
                fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _45.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_45.QueryModuleAccountByNameRequest>): _45.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _45.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_45.QueryModuleAccountByNameResponse>): _45.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
            };
            BaseAccount: {
                encode(message: _43.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.BaseAccount;
                fromPartial(object: Partial<_43.BaseAccount>): _43.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _43.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.ModuleAccount;
                fromPartial(object: Partial<_43.ModuleAccount>): _43.ModuleAccount;
            };
            Params: {
                encode(message: _43.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.Params;
                fromPartial(object: Partial<_43.Params>): _43.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _195.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _49.QueryGrantsRequest): Promise<_49.QueryGrantsResponse>;
                granterGrants(request: _49.QueryGranterGrantsRequest): Promise<_49.QueryGranterGrantsResponse>;
                granteeGrants(request: _49.QueryGranteeGrantsRequest): Promise<_49.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _50.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _50.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _50.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _50.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _50.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _50.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _50.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgGrant;
                fromPartial(object: Partial<_50.MsgGrant>): _50.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _50.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgExecResponse;
                fromPartial(object: Partial<_50.MsgExecResponse>): _50.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _50.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgExec;
                fromPartial(object: Partial<_50.MsgExec>): _50.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _50.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgGrantResponse;
                fromPartial(_: Partial<_50.MsgGrantResponse>): _50.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _50.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgRevoke;
                fromPartial(object: Partial<_50.MsgRevoke>): _50.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _50.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _50.MsgRevokeResponse;
                fromPartial(_: Partial<_50.MsgRevokeResponse>): _50.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _49.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGrantsRequest;
                fromPartial(object: Partial<_49.QueryGrantsRequest>): _49.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _49.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGrantsResponse;
                fromPartial(object: Partial<_49.QueryGrantsResponse>): _49.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _49.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_49.QueryGranterGrantsRequest>): _49.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _49.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_49.QueryGranterGrantsResponse>): _49.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _49.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_49.QueryGranteeGrantsRequest>): _49.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _49.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_49.QueryGranteeGrantsResponse>): _49.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
            };
            EventGrant: {
                encode(message: _47.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.EventGrant;
                fromPartial(object: Partial<_47.EventGrant>): _47.EventGrant;
            };
            EventRevoke: {
                encode(message: _47.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.EventRevoke;
                fromPartial(object: Partial<_47.EventRevoke>): _47.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _46.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GenericAuthorization;
                fromPartial(object: Partial<_46.GenericAuthorization>): _46.GenericAuthorization;
            };
            Grant: {
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Grant;
                fromPartial(object: Partial<_46.Grant>): _46.Grant;
            };
            GrantAuthorization: {
                encode(message: _46.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.GrantAuthorization;
                fromPartial(object: Partial<_46.GrantAuthorization>): _46.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _54.QueryBalanceRequest): Promise<_54.QueryBalanceResponse>;
                allBalances(request: _54.QueryAllBalancesRequest): Promise<_54.QueryAllBalancesResponse>;
                spendableBalances(request: _54.QuerySpendableBalancesRequest): Promise<_54.QuerySpendableBalancesResponse>;
                totalSupply(request?: _54.QueryTotalSupplyRequest): Promise<_54.QueryTotalSupplyResponse>;
                supplyOf(request: _54.QuerySupplyOfRequest): Promise<_54.QuerySupplyOfResponse>;
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                denomMetadata(request: _54.QueryDenomMetadataRequest): Promise<_54.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _54.QueryDenomsMetadataRequest): Promise<_54.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _55.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _55.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _55.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _55.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _55.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgSend;
                fromPartial(object: Partial<_55.MsgSend>): _55.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _55.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgSendResponse;
                fromPartial(_: Partial<_55.MsgSendResponse>): _55.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _55.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgMultiSend;
                fromPartial(object: Partial<_55.MsgMultiSend>): _55.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _55.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgMultiSendResponse;
                fromPartial(_: Partial<_55.MsgMultiSendResponse>): _55.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _54.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryBalanceRequest;
                fromPartial(object: Partial<_54.QueryBalanceRequest>): _54.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _54.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryBalanceResponse;
                fromPartial(object: Partial<_54.QueryBalanceResponse>): _54.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _54.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryAllBalancesRequest;
                fromPartial(object: Partial<_54.QueryAllBalancesRequest>): _54.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _54.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryAllBalancesResponse;
                fromPartial(object: Partial<_54.QueryAllBalancesResponse>): _54.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _54.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_54.QuerySpendableBalancesRequest>): _54.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _54.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_54.QuerySpendableBalancesResponse>): _54.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _54.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_54.QueryTotalSupplyRequest>): _54.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _54.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_54.QueryTotalSupplyResponse>): _54.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _54.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySupplyOfRequest;
                fromPartial(object: Partial<_54.QuerySupplyOfRequest>): _54.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _54.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QuerySupplyOfResponse;
                fromPartial(object: Partial<_54.QuerySupplyOfResponse>): _54.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _54.QueryParamsRequest;
                fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _54.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomsMetadataRequest>): _54.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _54.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomsMetadataResponse>): _54.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _54.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomMetadataRequest>): _54.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _54.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomMetadataResponse>): _54.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
            };
            Balance: {
                encode(message: _53.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Balance;
                fromPartial(object: Partial<_53.Balance>): _53.Balance;
            };
            Params: {
                encode(message: _52.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
            };
            SendEnabled: {
                encode(message: _52.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.SendEnabled;
                fromPartial(object: Partial<_52.SendEnabled>): _52.SendEnabled;
            };
            Input: {
                encode(message: _52.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Input;
                fromPartial(object: Partial<_52.Input>): _52.Input;
            };
            Output: {
                encode(message: _52.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Output;
                fromPartial(object: Partial<_52.Output>): _52.Output;
            };
            Supply: {
                encode(message: _52.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Supply;
                fromPartial(object: Partial<_52.Supply>): _52.Supply;
            };
            DenomUnit: {
                encode(message: _52.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.DenomUnit;
                fromPartial(object: Partial<_52.DenomUnit>): _52.DenomUnit;
            };
            Metadata: {
                encode(message: _52.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.Metadata;
                fromPartial(object: Partial<_52.Metadata>): _52.Metadata;
            };
            SendAuthorization: {
                encode(message: _51.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.SendAuthorization;
                fromPartial(object: Partial<_51.SendAuthorization>): _51.SendAuthorization;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _57.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.GenesisOwners;
                fromPartial(object: Partial<_57.GenesisOwners>): _57.GenesisOwners;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
            };
            Capability: {
                encode(message: _56.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Capability;
                fromPartial(object: Partial<_56.Capability>): _56.Capability;
            };
            Owner: {
                encode(message: _56.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.Owner;
                fromPartial(object: Partial<_56.Owner>): _56.Owner;
            };
            CapabilityOwners: {
                encode(message: _56.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.CapabilityOwners;
                fromPartial(object: Partial<_56.CapabilityOwners>): _56.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _59.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _59.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _59.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgVerifyInvariant;
                fromPartial(object: Partial<_59.MsgVerifyInvariant>): _59.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _59.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_59.MsgVerifyInvariantResponse>): _59.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _60.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PubKey;
                fromPartial(object: Partial<_60.PubKey>): _60.PubKey;
            };
            PrivKey: {
                encode(message: _60.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.PrivKey;
                fromPartial(object: Partial<_60.PrivKey>): _60.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _61.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.LegacyAminoPubKey;
                fromPartial(object: Partial<_61.LegacyAminoPubKey>): _61.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _62.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.PubKey;
                fromPartial(object: Partial<_62.PubKey>): _62.PubKey;
            };
            PrivKey: {
                encode(message: _62.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.PrivKey;
                fromPartial(object: Partial<_62.PrivKey>): _62.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _63.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.PubKey;
                fromPartial(object: Partial<_63.PubKey>): _63.PubKey;
            };
            PrivKey: {
                encode(message: _63.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.PrivKey;
                fromPartial(object: Partial<_63.PrivKey>): _63.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                validatorOutstandingRewards(request: _66.QueryValidatorOutstandingRewardsRequest): Promise<_66.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _66.QueryValidatorCommissionRequest): Promise<_66.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _66.QueryValidatorSlashesRequest): Promise<_66.QueryValidatorSlashesResponse>;
                delegationRewards(request: _66.QueryDelegationRewardsRequest): Promise<_66.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _66.QueryDelegationTotalRewardsRequest): Promise<_66.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _66.QueryDelegatorWithdrawAddressRequest): Promise<_66.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _66.QueryCommunityPoolRequest): Promise<_66.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _67.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _67.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _67.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _67.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _67.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _67.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _67.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _67.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _67.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_67.MsgSetWithdrawAddress>): _67.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _67.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_67.MsgSetWithdrawAddressResponse>): _67.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _67.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_67.MsgWithdrawDelegatorReward>): _67.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _67.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_67.MsgWithdrawDelegatorRewardResponse>): _67.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _67.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_67.MsgWithdrawValidatorCommission>): _67.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _67.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_67.MsgWithdrawValidatorCommissionResponse>): _67.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _67.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _67.MsgFundCommunityPool;
                fromPartial(object: Partial<_67.MsgFundCommunityPool>): _67.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _67.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _67.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_67.MsgFundCommunityPoolResponse>): _67.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _66.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_66.QueryValidatorOutstandingRewardsRequest>): _66.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _66.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_66.QueryValidatorOutstandingRewardsResponse>): _66.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _66.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_66.QueryValidatorCommissionRequest>): _66.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _66.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_66.QueryValidatorCommissionResponse>): _66.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _66.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_66.QueryValidatorSlashesRequest>): _66.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _66.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_66.QueryValidatorSlashesResponse>): _66.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _66.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_66.QueryDelegationRewardsRequest>): _66.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _66.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_66.QueryDelegationRewardsResponse>): _66.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _66.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_66.QueryDelegationTotalRewardsRequest>): _66.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _66.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_66.QueryDelegationTotalRewardsResponse>): _66.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _66.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsRequest>): _66.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _66.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsResponse>): _66.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _66.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_66.QueryDelegatorWithdrawAddressRequest>): _66.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _66.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_66.QueryDelegatorWithdrawAddressResponse>): _66.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _66.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _66.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_66.QueryCommunityPoolRequest>): _66.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _66.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _66.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_66.QueryCommunityPoolResponse>): _66.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _65.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_65.DelegatorWithdrawInfo>): _65.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _65.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorOutstandingRewardsRecord>): _65.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _65.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_65.ValidatorAccumulatedCommissionRecord>): _65.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _65.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorHistoricalRewardsRecord>): _65.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _65.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorCurrentRewardsRecord>): _65.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _65.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_65.DelegatorStartingInfoRecord>): _65.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _65.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_65.ValidatorSlashEventRecord>): _65.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
            Params: {
                encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _64.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_64.ValidatorHistoricalRewards>): _64.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _64.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorCurrentRewards;
                fromPartial(object: Partial<_64.ValidatorCurrentRewards>): _64.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _64.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_64.ValidatorAccumulatedCommission>): _64.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _64.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_64.ValidatorOutstandingRewards>): _64.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _64.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorSlashEvent;
                fromPartial(object: Partial<_64.ValidatorSlashEvent>): _64.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _64.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.ValidatorSlashEvents;
                fromPartial(object: Partial<_64.ValidatorSlashEvents>): _64.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _64.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.FeePool;
                fromPartial(object: Partial<_64.FeePool>): _64.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _64.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_64.CommunityPoolSpendProposal>): _64.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _64.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.DelegatorStartingInfo;
                fromPartial(object: Partial<_64.DelegatorStartingInfo>): _64.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _64.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.DelegationDelegatorReward;
                fromPartial(object: Partial<_64.DelegationDelegatorReward>): _64.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _64.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _64.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_64.CommunityPoolSpendProposalWithDeposit>): _64.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _70.QueryEvidenceRequest): Promise<_70.QueryEvidenceResponse>;
                allEvidence(request?: _70.QueryAllEvidenceRequest): Promise<_70.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _71.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _71.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _71.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgSubmitEvidence;
                fromPartial(object: Partial<_71.MsgSubmitEvidence>): _71.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _71.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _71.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_71.MsgSubmitEvidenceResponse>): _71.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _70.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryEvidenceRequest;
                fromPartial(object: Partial<_70.QueryEvidenceRequest>): _70.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _70.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryEvidenceResponse;
                fromPartial(object: Partial<_70.QueryEvidenceResponse>): _70.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _70.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_70.QueryAllEvidenceRequest>): _70.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _70.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _70.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_70.QueryAllEvidenceResponse>): _70.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
            };
            Equivocation: {
                encode(message: _68.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _68.Equivocation;
                fromPartial(object: Partial<_68.Equivocation>): _68.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _74.QueryAllowanceRequest): Promise<_74.QueryAllowanceResponse>;
                allowances(request: _74.QueryAllowancesRequest): Promise<_74.QueryAllowancesResponse>;
                allowancesByGranter(request: _74.QueryAllowancesByGranterRequest): Promise<_74.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _75.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _75.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _75.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _75.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _75.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgGrantAllowance;
                fromPartial(object: Partial<_75.MsgGrantAllowance>): _75.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _75.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_75.MsgGrantAllowanceResponse>): _75.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _75.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _75.MsgRevokeAllowance;
                fromPartial(object: Partial<_75.MsgRevokeAllowance>): _75.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _75.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _75.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_75.MsgRevokeAllowanceResponse>): _75.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _74.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllowanceRequest;
                fromPartial(object: Partial<_74.QueryAllowanceRequest>): _74.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _74.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllowanceResponse;
                fromPartial(object: Partial<_74.QueryAllowanceResponse>): _74.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _74.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllowancesRequest;
                fromPartial(object: Partial<_74.QueryAllowancesRequest>): _74.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _74.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllowancesResponse;
                fromPartial(object: Partial<_74.QueryAllowancesResponse>): _74.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _74.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_74.QueryAllowancesByGranterRequest>): _74.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _74.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _74.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_74.QueryAllowancesByGranterResponse>): _74.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
            BasicAllowance: {
                encode(message: _72.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.BasicAllowance;
                fromPartial(object: Partial<_72.BasicAllowance>): _72.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _72.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.PeriodicAllowance;
                fromPartial(object: Partial<_72.PeriodicAllowance>): _72.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _72.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.AllowedMsgAllowance;
                fromPartial(object: Partial<_72.AllowedMsgAllowance>): _72.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _72.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _72.Grant;
                fromPartial(object: Partial<_72.Grant>): _72.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _76.GenesisState;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _80.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _80.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _80.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _80.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _80.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _80.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _80.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _80.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _80.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgSubmitProposal;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _80.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgVote;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _80.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgVoteResponse;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _80.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgVoteWeighted;
                fromPartial(object: Partial<_80.MsgVoteWeighted>): _80.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _80.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_80.MsgVoteWeightedResponse>): _80.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _80.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _80.MsgDeposit;
                fromPartial(object: Partial<_80.MsgDeposit>): _80.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _80.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _80.MsgDepositResponse;
                fromPartial(_: Partial<_80.MsgDepositResponse>): _80.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _79.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalRequest;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _79.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalResponse;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _79.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalsRequest;
                fromPartial(object: Partial<_79.QueryProposalsRequest>): _79.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _79.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryProposalsResponse;
                fromPartial(object: Partial<_79.QueryProposalsResponse>): _79.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _79.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVoteRequest;
                fromPartial(object: Partial<_79.QueryVoteRequest>): _79.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _79.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVoteResponse;
                fromPartial(object: Partial<_79.QueryVoteResponse>): _79.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _79.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVotesRequest;
                fromPartial(object: Partial<_79.QueryVotesRequest>): _79.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _79.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryVotesResponse;
                fromPartial(object: Partial<_79.QueryVotesResponse>): _79.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryParamsRequest;
                fromPartial(object: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryParamsResponse;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _79.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDepositRequest;
                fromPartial(object: Partial<_79.QueryDepositRequest>): _79.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _79.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDepositResponse;
                fromPartial(object: Partial<_79.QueryDepositResponse>): _79.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _79.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDepositsRequest;
                fromPartial(object: Partial<_79.QueryDepositsRequest>): _79.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _79.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryDepositsResponse;
                fromPartial(object: Partial<_79.QueryDepositsResponse>): _79.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _79.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _79.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _78.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.WeightedVoteOption;
                fromPartial(object: Partial<_78.WeightedVoteOption>): _78.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _78.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.TextProposal;
                fromPartial(object: Partial<_78.TextProposal>): _78.TextProposal;
            };
            Deposit: {
                encode(message: _78.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Deposit;
                fromPartial(object: Partial<_78.Deposit>): _78.Deposit;
            };
            Proposal: {
                encode(message: _78.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Proposal;
                fromPartial(object: Partial<_78.Proposal>): _78.Proposal;
            };
            TallyResult: {
                encode(message: _78.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.TallyResult;
                fromPartial(object: Partial<_78.TallyResult>): _78.TallyResult;
            };
            Vote: {
                encode(message: _78.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.Vote;
                fromPartial(object: Partial<_78.Vote>): _78.Vote;
            };
            DepositParams: {
                encode(message: _78.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.DepositParams;
                fromPartial(object: Partial<_78.DepositParams>): _78.DepositParams;
            };
            VotingParams: {
                encode(message: _78.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.VotingParams;
                fromPartial(object: Partial<_78.VotingParams>): _78.VotingParams;
            };
            TallyParams: {
                encode(message: _78.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _78.TallyParams;
                fromPartial(object: Partial<_78.TallyParams>): _78.TallyParams;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _83.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _83.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _83.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.QueryInflationRequest;
                fromPartial(_: Partial<_83.QueryInflationRequest>): _83.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _83.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.QueryInflationResponse;
                fromPartial(object: Partial<_83.QueryInflationResponse>): _83.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _83.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _83.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_83.QueryAnnualProvisionsRequest>): _83.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _83.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _83.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_83.QueryAnnualProvisionsResponse>): _83.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _82.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Minter;
                fromPartial(object: Partial<_82.Minter>): _82.Minter;
            };
            Params: {
                encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _81.GenesisState;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryParamsRequest;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _85.QueryParamsResponse;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _84.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ParameterChangeProposal;
                fromPartial(object: Partial<_84.ParameterChangeProposal>): _84.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _84.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _84.ParamChange;
                fromPartial(object: Partial<_84.ParamChange>): _84.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _89.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _89.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _89.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _89.MsgUnjail;
                fromPartial(object: Partial<_89.MsgUnjail>): _89.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _89.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _89.MsgUnjailResponse;
                fromPartial(_: Partial<_89.MsgUnjailResponse>): _89.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _88.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.ValidatorSigningInfo;
                fromPartial(object: Partial<_88.ValidatorSigningInfo>): _88.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
            };
            QueryParamsRequest: {
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _87.QueryParamsRequest;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QueryParamsResponse;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _87.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfoRequest;
                fromPartial(object: Partial<_87.QuerySigningInfoRequest>): _87.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _87.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfoResponse;
                fromPartial(object: Partial<_87.QuerySigningInfoResponse>): _87.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _87.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfosRequest;
                fromPartial(object: Partial<_87.QuerySigningInfosRequest>): _87.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _87.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _87.QuerySigningInfosResponse;
                fromPartial(object: Partial<_87.QuerySigningInfosResponse>): _87.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
            };
            SigningInfo: {
                encode(message: _86.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.SigningInfo;
                fromPartial(object: Partial<_86.SigningInfo>): _86.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _86.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.ValidatorMissedBlocks;
                fromPartial(object: Partial<_86.ValidatorMissedBlocks>): _86.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _86.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _86.MissedBlock;
                fromPartial(object: Partial<_86.MissedBlock>): _86.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _94.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _94.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _94.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _94.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _94.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _94.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _94.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _94.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _94.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _94.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _94.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgCreateValidator;
                fromPartial(object: Partial<_94.MsgCreateValidator>): _94.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _94.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_94.MsgCreateValidatorResponse>): _94.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _94.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgEditValidator;
                fromPartial(object: Partial<_94.MsgEditValidator>): _94.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _94.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgEditValidatorResponse;
                fromPartial(_: Partial<_94.MsgEditValidatorResponse>): _94.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _94.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgDelegate;
                fromPartial(object: Partial<_94.MsgDelegate>): _94.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _94.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _94.MsgDelegateResponse;
                fromPartial(_: Partial<_94.MsgDelegateResponse>): _94.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _94.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgBeginRedelegate;
                fromPartial(object: Partial<_94.MsgBeginRedelegate>): _94.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _94.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_94.MsgBeginRedelegateResponse>): _94.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _94.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgUndelegate;
                fromPartial(object: Partial<_94.MsgUndelegate>): _94.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _94.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _94.MsgUndelegateResponse;
                fromPartial(object: Partial<_94.MsgUndelegateResponse>): _94.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _93.BondStatus;
            bondStatusToJSON(object: _93.BondStatus): string;
            BondStatus: typeof _93.BondStatus;
            BondStatusSDKType: typeof _93.BondStatus;
            HistoricalInfo: {
                encode(message: _93.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.HistoricalInfo;
                fromPartial(object: Partial<_93.HistoricalInfo>): _93.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _93.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.CommissionRates;
                fromPartial(object: Partial<_93.CommissionRates>): _93.CommissionRates;
            };
            Commission: {
                encode(message: _93.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Commission;
                fromPartial(object: Partial<_93.Commission>): _93.Commission;
            };
            Description: {
                encode(message: _93.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Description;
                fromPartial(object: Partial<_93.Description>): _93.Description;
            };
            Validator: {
                encode(message: _93.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Validator;
                fromPartial(object: Partial<_93.Validator>): _93.Validator;
            };
            ValAddresses: {
                encode(message: _93.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.ValAddresses;
                fromPartial(object: Partial<_93.ValAddresses>): _93.ValAddresses;
            };
            DVPair: {
                encode(message: _93.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVPair;
                fromPartial(object: Partial<_93.DVPair>): _93.DVPair;
            };
            DVPairs: {
                encode(message: _93.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVPairs;
                fromPartial(object: Partial<_93.DVPairs>): _93.DVPairs;
            };
            DVVTriplet: {
                encode(message: _93.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVVTriplet;
                fromPartial(object: Partial<_93.DVVTriplet>): _93.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _93.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DVVTriplets;
                fromPartial(object: Partial<_93.DVVTriplets>): _93.DVVTriplets;
            };
            Delegation: {
                encode(message: _93.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Delegation;
                fromPartial(object: Partial<_93.Delegation>): _93.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _93.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.UnbondingDelegation;
                fromPartial(object: Partial<_93.UnbondingDelegation>): _93.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _93.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.UnbondingDelegationEntry;
                fromPartial(object: Partial<_93.UnbondingDelegationEntry>): _93.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _93.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.RedelegationEntry;
                fromPartial(object: Partial<_93.RedelegationEntry>): _93.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _93.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Redelegation;
                fromPartial(object: Partial<_93.Redelegation>): _93.Redelegation;
            };
            Params: {
                encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Params;
                fromPartial(object: Partial<_93.Params>): _93.Params;
            };
            DelegationResponse: {
                encode(message: _93.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.DelegationResponse;
                fromPartial(object: Partial<_93.DelegationResponse>): _93.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _93.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.RedelegationEntryResponse;
                fromPartial(object: Partial<_93.RedelegationEntryResponse>): _93.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _93.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.RedelegationResponse;
                fromPartial(object: Partial<_93.RedelegationResponse>): _93.RedelegationResponse;
            };
            Pool: {
                encode(message: _93.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _93.Pool;
                fromPartial(object: Partial<_93.Pool>): _93.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _92.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorsRequest;
                fromPartial(object: Partial<_92.QueryValidatorsRequest>): _92.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _92.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorsResponse;
                fromPartial(object: Partial<_92.QueryValidatorsResponse>): _92.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _92.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorRequest;
                fromPartial(object: Partial<_92.QueryValidatorRequest>): _92.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _92.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorResponse;
                fromPartial(object: Partial<_92.QueryValidatorResponse>): _92.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _92.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsRequest>): _92.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _92.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsResponse>): _92.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _92.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsRequest>): _92.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _92.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsResponse>): _92.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _92.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegationRequest;
                fromPartial(object: Partial<_92.QueryDelegationRequest>): _92.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _92.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegationResponse;
                fromPartial(object: Partial<_92.QueryDelegationResponse>): _92.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _92.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationRequest>): _92.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _92.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationResponse>): _92.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _92.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsRequest>): _92.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _92.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsResponse>): _92.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _92.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsRequest>): _92.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _92.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsResponse>): _92.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _92.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryRedelegationsRequest;
                fromPartial(object: Partial<_92.QueryRedelegationsRequest>): _92.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _92.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryRedelegationsResponse;
                fromPartial(object: Partial<_92.QueryRedelegationsResponse>): _92.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _92.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsRequest>): _92.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _92.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsResponse>): _92.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _92.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorRequest>): _92.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _92.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorResponse>): _92.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _92.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_92.QueryHistoricalInfoRequest>): _92.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _92.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_92.QueryHistoricalInfoResponse>): _92.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _92.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.QueryPoolRequest;
                fromPartial(_: Partial<_92.QueryPoolRequest>): _92.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _92.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryPoolResponse;
                fromPartial(object: Partial<_92.QueryPoolResponse>): _92.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _92.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _92.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _91.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _91.LastValidatorPower;
                fromPartial(object: Partial<_91.LastValidatorPower>): _91.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _90.AuthorizationType;
            authorizationTypeToJSON(object: _90.AuthorizationType): string;
            AuthorizationType: typeof _90.AuthorizationType;
            AuthorizationTypeSDKType: typeof _90.AuthorizationType;
            StakeAuthorization: {
                encode(message: _90.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.StakeAuthorization;
                fromPartial(object: Partial<_90.StakeAuthorization>): _90.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _90.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _90.StakeAuthorization_Validators;
                fromPartial(object: Partial<_90.StakeAuthorization_Validators>): _90.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _95.SignMode;
                signModeToJSON(object: _95.SignMode): string;
                SignMode: typeof _95.SignMode;
                SignModeSDKType: typeof _95.SignMode;
                SignatureDescriptors: {
                    encode(message: _95.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptors;
                    fromPartial(object: Partial<_95.SignatureDescriptors>): _95.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _95.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor;
                    fromPartial(object: Partial<_95.SignatureDescriptor>): _95.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _95.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data>): _95.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _95.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Single>): _95.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _95.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Multi>): _95.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _193.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            Tx: {
                encode(message: _97.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Tx;
                fromPartial(object: Partial<_97.Tx>): _97.Tx;
            };
            TxRaw: {
                encode(message: _97.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.TxRaw;
                fromPartial(object: Partial<_97.TxRaw>): _97.TxRaw;
            };
            SignDoc: {
                encode(message: _97.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.SignDoc;
                fromPartial(object: Partial<_97.SignDoc>): _97.SignDoc;
            };
            TxBody: {
                encode(message: _97.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.TxBody;
                fromPartial(object: Partial<_97.TxBody>): _97.TxBody;
            };
            AuthInfo: {
                encode(message: _97.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.AuthInfo;
                fromPartial(object: Partial<_97.AuthInfo>): _97.AuthInfo;
            };
            SignerInfo: {
                encode(message: _97.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.SignerInfo;
                fromPartial(object: Partial<_97.SignerInfo>): _97.SignerInfo;
            };
            ModeInfo: {
                encode(message: _97.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModeInfo;
                fromPartial(object: Partial<_97.ModeInfo>): _97.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _97.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModeInfo_Single;
                fromPartial(object: Partial<_97.ModeInfo_Single>): _97.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _97.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.ModeInfo_Multi;
                fromPartial(object: Partial<_97.ModeInfo_Multi>): _97.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _97.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _97.Fee;
                fromPartial(object: Partial<_97.Fee>): _97.Fee;
            };
            orderByFromJSON(object: any): _96.OrderBy;
            orderByToJSON(object: _96.OrderBy): string;
            broadcastModeFromJSON(object: any): _96.BroadcastMode;
            broadcastModeToJSON(object: _96.BroadcastMode): string;
            OrderBy: typeof _96.OrderBy;
            OrderBySDKType: typeof _96.OrderBy;
            BroadcastMode: typeof _96.BroadcastMode;
            BroadcastModeSDKType: typeof _96.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _96.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxsEventRequest;
                fromPartial(object: Partial<_96.GetTxsEventRequest>): _96.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _96.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxsEventResponse;
                fromPartial(object: Partial<_96.GetTxsEventResponse>): _96.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _96.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.BroadcastTxRequest;
                fromPartial(object: Partial<_96.BroadcastTxRequest>): _96.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _96.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.BroadcastTxResponse;
                fromPartial(object: Partial<_96.BroadcastTxResponse>): _96.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _96.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.SimulateRequest;
                fromPartial(object: Partial<_96.SimulateRequest>): _96.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _96.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.SimulateResponse;
                fromPartial(object: Partial<_96.SimulateResponse>): _96.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _96.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxRequest;
                fromPartial(object: Partial<_96.GetTxRequest>): _96.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _96.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetTxResponse;
                fromPartial(object: Partial<_96.GetTxResponse>): _96.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _96.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_96.GetBlockWithTxsRequest>): _96.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _96.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _96.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_96.GetBlockWithTxsResponse>): _96.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            Plan: {
                encode(message: _99.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.Plan;
                fromPartial(object: Partial<_99.Plan>): _99.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _99.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_99.SoftwareUpgradeProposal>): _99.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _99.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_99.CancelSoftwareUpgradeProposal>): _99.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _99.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _99.ModuleVersion;
                fromPartial(object: Partial<_99.ModuleVersion>): _99.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_98.QueryCurrentPlanRequest>): _98.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_98.QueryCurrentPlanResponse>): _98.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_98.QueryAppliedPlanRequest>): _98.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_98.QueryAppliedPlanResponse>): _98.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_98.QueryModuleVersionsRequest>): _98.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_98.QueryModuleVersionsResponse>): _98.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _100.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _100.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _101.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.BaseVestingAccount;
                fromPartial(object: Partial<_101.BaseVestingAccount>): _101.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _101.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.ContinuousVestingAccount;
                fromPartial(object: Partial<_101.ContinuousVestingAccount>): _101.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _101.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.DelayedVestingAccount;
                fromPartial(object: Partial<_101.DelayedVestingAccount>): _101.DelayedVestingAccount;
            };
            Period: {
                encode(message: _101.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.Period;
                fromPartial(object: Partial<_101.Period>): _101.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _101.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.PeriodicVestingAccount;
                fromPartial(object: Partial<_101.PeriodicVestingAccount>): _101.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _101.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _101.PermanentLockedAccount;
                fromPartial(object: Partial<_101.PermanentLockedAccount>): _101.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _100.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _100.MsgCreateVestingAccount;
                fromPartial(object: Partial<_100.MsgCreateVestingAccount>): _100.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _100.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _100.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_100.MsgCreateVestingAccountResponse>): _100.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _195.MsgClientImpl;
                };
                bank: {
                    v1beta1: _196.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _197.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _198.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _199.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _200.MsgClientImpl;
                };
                gov: {
                    v1beta1: _201.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _202.MsgClientImpl;
                };
                staking: {
                    v1beta1: _203.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _204.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _45.QueryAccountsRequest): Promise<_45.QueryAccountsResponse>;
                        account(request: _45.QueryAccountRequest): Promise<_45.QueryAccountResponse>;
                        params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                        moduleAccountByName(request: _45.QueryModuleAccountByNameRequest): Promise<_45.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _49.QueryGrantsRequest): Promise<_49.QueryGrantsResponse>;
                        granterGrants(request: _49.QueryGranterGrantsRequest): Promise<_49.QueryGranterGrantsResponse>;
                        granteeGrants(request: _49.QueryGranteeGrantsRequest): Promise<_49.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _54.QueryBalanceRequest): Promise<_54.QueryBalanceResponse>;
                        allBalances(request: _54.QueryAllBalancesRequest): Promise<_54.QueryAllBalancesResponse>;
                        spendableBalances(request: _54.QuerySpendableBalancesRequest): Promise<_54.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _54.QueryTotalSupplyRequest): Promise<_54.QueryTotalSupplyResponse>;
                        supplyOf(request: _54.QuerySupplyOfRequest): Promise<_54.QuerySupplyOfResponse>;
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        denomMetadata(request: _54.QueryDenomMetadataRequest): Promise<_54.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _54.QueryDenomsMetadataRequest): Promise<_54.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                            getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                            getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                            getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _66.QueryValidatorOutstandingRewardsRequest): Promise<_66.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _66.QueryValidatorCommissionRequest): Promise<_66.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _66.QueryValidatorSlashesRequest): Promise<_66.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _66.QueryDelegationRewardsRequest): Promise<_66.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _66.QueryDelegationTotalRewardsRequest): Promise<_66.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _66.QueryDelegatorWithdrawAddressRequest): Promise<_66.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _66.QueryCommunityPoolRequest): Promise<_66.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _70.QueryEvidenceRequest): Promise<_70.QueryEvidenceResponse>;
                        allEvidence(request?: _70.QueryAllEvidenceRequest): Promise<_70.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _74.QueryAllowanceRequest): Promise<_74.QueryAllowanceResponse>;
                        allowances(request: _74.QueryAllowancesRequest): Promise<_74.QueryAllowancesResponse>;
                        allowancesByGranter(request: _74.QueryAllowancesByGranterRequest): Promise<_74.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                        vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                        votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                        params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                        deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                        annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                        signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                        validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                        validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                        unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                        delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                        pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                        getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                        broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                        getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                        getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _165.LCDQueryClient;
                };
                authz: {
                    v1beta1: _166.LCDQueryClient;
                };
                bank: {
                    v1beta1: _167.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _168.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _169.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _170.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _171.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _172.LCDQueryClient;
                };
                gov: {
                    v1beta1: _173.LCDQueryClient;
                };
                mint: {
                    v1beta1: _174.LCDQueryClient;
                };
                params: {
                    v1beta1: _175.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _176.LCDQueryClient;
                };
                staking: {
                    v1beta1: _177.LCDQueryClient;
                };
                tx: {
                    v1beta1: _178.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _179.LCDQueryClient;
                };
            };
        }>;
    };
}
