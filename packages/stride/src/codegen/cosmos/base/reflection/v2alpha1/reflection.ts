import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptor;
  /** chain provides the chain descriptor */
  chain?: ChainDescriptor;
  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptor;
  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptor;
  /** query_services provides metadata information regarding the available queriable endpoints */
  queryServices?: QueryServicesDescriptor;
  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptor;
}
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptorSDKType {
  authn?: AuthnDescriptorSDKType;
  chain?: ChainDescriptorSDKType;
  codec?: CodecDescriptorSDKType;
  configuration?: ConfigurationDescriptorSDKType;
  query_services?: QueryServicesDescriptorSDKType;
  tx?: TxDescriptorSDKType;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname: string;
  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs: MsgDescriptor[];
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptorSDKType {
  fullname: string;
  msgs: MsgDescriptorSDKType[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
  /** sign_modes defines the supported signature algorithm */
  signModes: SigningModeDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptorSDKType {
  sign_modes: SigningModeDescriptorSDKType[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
  /** name defines the unique name of the signing mode */
  name: string;
  /** number is the unique int32 identifier for the sign_mode enum */
  number: number;
  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authnInfoProviderMethodFullname: string;
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptorSDKType {
  name: string;
  number: number;
  authn_info_provider_method_fullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
  /** id is the chain id */
  id: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptorSDKType {
  id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces: InterfaceDescriptor[];
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptorSDKType {
  interfaces: InterfaceDescriptorSDKType[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
  /** fullname is the name of the interface */
  fullname: string;
  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
  /** interface_implementers is a list of the descriptors of the interface implementers */
  interfaceImplementers: InterfaceImplementerDescriptor[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptorSDKType {
  fullname: string;
  interface_accepting_messages: InterfaceAcceptingMessageDescriptorSDKType[];
  interface_implementers: InterfaceImplementerDescriptorSDKType[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname: string;
  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  typeUrl: string;
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptorSDKType {
  fullname: string;
  type_url: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname: string;
  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  fieldDescriptorNames: string[];
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptorSDKType {
  fullname: string;
  field_descriptor_names: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
  /** bech32_account_address_prefix is the account address prefix */
  bech32AccountAddressPrefix: string;
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptorSDKType {
  bech32_account_address_prefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msgTypeUrl: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptorSDKType {
  msg_type_url: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequestSDKType {}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptor;
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponseSDKType {
  authn?: AuthnDescriptorSDKType;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequestSDKType {}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
  /** chain describes application chain information */
  chain?: ChainDescriptor;
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponseSDKType {
  chain?: ChainDescriptorSDKType;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequestSDKType {}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptor;
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponseSDKType {
  codec?: CodecDescriptorSDKType;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequestSDKType {}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptor;
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponseSDKType {
  config?: ConfigurationDescriptorSDKType;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequestSDKType {}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptor;
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponseSDKType {
  queries?: QueryServicesDescriptorSDKType;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequestSDKType {}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptor;
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponseSDKType {
  tx?: TxDescriptorSDKType;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  queryServices: QueryServiceDescriptor[];
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptorSDKType {
  query_services: QueryServiceDescriptorSDKType[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
  /** fullname is the protobuf fullname of the service descriptor */
  fullname: string;
  /** is_module describes if this service is actually exposed by an application's module */
  isModule: boolean;
  /** methods provides a list of query service methods */
  methods: QueryMethodDescriptor[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptorSDKType {
  fullname: string;
  is_module: boolean;
  methods: QueryMethodDescriptorSDKType[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
  /** name is the protobuf name (not fullname) of the method */
  name: string;
  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  fullQueryPath: string;
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptorSDKType {
  name: string;
  full_query_path: string;
}
function createBaseAppDescriptor(): AppDescriptor {
  return {
    authn: undefined,
    chain: undefined,
    codec: undefined,
    configuration: undefined,
    queryServices: undefined,
    tx: undefined
  };
}
export const AppDescriptor = {
  encode(message: AppDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AppDescriptor {
    return {
      authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
      chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
      codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
      configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
      queryServices: isSet(object.queryServices) ? QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object: Partial<AppDescriptor>): AppDescriptor {
    const message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseTxDescriptor(): TxDescriptor {
  return {
    fullname: "",
    msgs: []
  };
}
export const TxDescriptor = {
  encode(message: TxDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TxDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TxDescriptor>): TxDescriptor {
    const message = createBaseTxDescriptor();
    message.fullname = object.fullname ?? "";
    message.msgs = object.msgs?.map(e => MsgDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAuthnDescriptor(): AuthnDescriptor {
  return {
    signModes: []
  };
}
export const AuthnDescriptor = {
  encode(message: AuthnDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AuthnDescriptor {
    return {
      signModes: Array.isArray(object?.signModes) ? object.signModes.map((e: any) => SigningModeDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AuthnDescriptor>): AuthnDescriptor {
    const message = createBaseAuthnDescriptor();
    message.signModes = object.signModes?.map(e => SigningModeDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSigningModeDescriptor(): SigningModeDescriptor {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}
export const SigningModeDescriptor = {
  encode(message: SigningModeDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },
  fromJSON(object: any): SigningModeDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      authnInfoProviderMethodFullname: isSet(object.authnInfoProviderMethodFullname) ? String(object.authnInfoProviderMethodFullname) : ""
    };
  },
  fromPartial(object: Partial<SigningModeDescriptor>): SigningModeDescriptor {
    const message = createBaseSigningModeDescriptor();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
    return message;
  }
};
function createBaseChainDescriptor(): ChainDescriptor {
  return {
    id: ""
  };
}
export const ChainDescriptor = {
  encode(message: ChainDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): ChainDescriptor {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<ChainDescriptor>): ChainDescriptor {
    const message = createBaseChainDescriptor();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseCodecDescriptor(): CodecDescriptor {
  return {
    interfaces: []
  };
}
export const CodecDescriptor = {
  encode(message: CodecDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CodecDescriptor {
    return {
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => InterfaceDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CodecDescriptor>): CodecDescriptor {
    const message = createBaseCodecDescriptor();
    message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}
export const InterfaceDescriptor = {
  encode(message: InterfaceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): InterfaceDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      interfaceAcceptingMessages: Array.isArray(object?.interfaceAcceptingMessages) ? object.interfaceAcceptingMessages.map((e: any) => InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
      interfaceImplementers: Array.isArray(object?.interfaceImplementers) ? object.interfaceImplementers.map((e: any) => InterfaceImplementerDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<InterfaceDescriptor>): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.fullname = object.fullname ?? "";
    message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
    message.interfaceImplementers = object.interfaceImplementers?.map(e => InterfaceImplementerDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseInterfaceImplementerDescriptor(): InterfaceImplementerDescriptor {
  return {
    fullname: "",
    typeUrl: ""
  };
}
export const InterfaceImplementerDescriptor = {
  encode(message: InterfaceImplementerDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },
  fromJSON(object: any): InterfaceImplementerDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : ""
    };
  },
  fromPartial(object: Partial<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor {
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = object.fullname ?? "";
    message.typeUrl = object.typeUrl ?? "";
    return message;
  }
};
function createBaseInterfaceAcceptingMessageDescriptor(): InterfaceAcceptingMessageDescriptor {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}
export const InterfaceAcceptingMessageDescriptor = {
  encode(message: InterfaceAcceptingMessageDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      fieldDescriptorNames: Array.isArray(object?.fieldDescriptorNames) ? object.fieldDescriptorNames.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = object.fullname ?? "";
    message.fieldDescriptorNames = object.fieldDescriptorNames?.map(e => e) || [];
    return message;
  }
};
function createBaseConfigurationDescriptor(): ConfigurationDescriptor {
  return {
    bech32AccountAddressPrefix: ""
  };
}
export const ConfigurationDescriptor = {
  encode(message: ConfigurationDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },
  fromJSON(object: any): ConfigurationDescriptor {
    return {
      bech32AccountAddressPrefix: isSet(object.bech32AccountAddressPrefix) ? String(object.bech32AccountAddressPrefix) : ""
    };
  },
  fromPartial(object: Partial<ConfigurationDescriptor>): ConfigurationDescriptor {
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
    return message;
  }
};
function createBaseMsgDescriptor(): MsgDescriptor {
  return {
    msgTypeUrl: ""
  };
}
export const MsgDescriptor = {
  encode(message: MsgDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },
  fromJSON(object: any): MsgDescriptor {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },
  fromPartial(object: Partial<MsgDescriptor>): MsgDescriptor {
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  }
};
function createBaseGetAuthnDescriptorRequest(): GetAuthnDescriptorRequest {
  return {};
}
export const GetAuthnDescriptorRequest = {
  encode(_: GetAuthnDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetAuthnDescriptorRequest {
    return {};
  },
  fromPartial(_: Partial<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  }
};
function createBaseGetAuthnDescriptorResponse(): GetAuthnDescriptorResponse {
  return {
    authn: undefined
  };
}
export const GetAuthnDescriptorResponse = {
  encode(message: GetAuthnDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetAuthnDescriptorResponse {
    return {
      authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
    };
  },
  fromPartial(object: Partial<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse {
    const message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  }
};
function createBaseGetChainDescriptorRequest(): GetChainDescriptorRequest {
  return {};
}
export const GetChainDescriptorRequest = {
  encode(_: GetChainDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetChainDescriptorRequest {
    return {};
  },
  fromPartial(_: Partial<GetChainDescriptorRequest>): GetChainDescriptorRequest {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  }
};
function createBaseGetChainDescriptorResponse(): GetChainDescriptorResponse {
  return {
    chain: undefined
  };
}
export const GetChainDescriptorResponse = {
  encode(message: GetChainDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetChainDescriptorResponse {
    return {
      chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
    };
  },
  fromPartial(object: Partial<GetChainDescriptorResponse>): GetChainDescriptorResponse {
    const message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  }
};
function createBaseGetCodecDescriptorRequest(): GetCodecDescriptorRequest {
  return {};
}
export const GetCodecDescriptorRequest = {
  encode(_: GetCodecDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetCodecDescriptorRequest {
    return {};
  },
  fromPartial(_: Partial<GetCodecDescriptorRequest>): GetCodecDescriptorRequest {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  }
};
function createBaseGetCodecDescriptorResponse(): GetCodecDescriptorResponse {
  return {
    codec: undefined
  };
}
export const GetCodecDescriptorResponse = {
  encode(message: GetCodecDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetCodecDescriptorResponse {
    return {
      codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
    };
  },
  fromPartial(object: Partial<GetCodecDescriptorResponse>): GetCodecDescriptorResponse {
    const message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  }
};
function createBaseGetConfigurationDescriptorRequest(): GetConfigurationDescriptorRequest {
  return {};
}
export const GetConfigurationDescriptorRequest = {
  encode(_: GetConfigurationDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetConfigurationDescriptorRequest {
    return {};
  },
  fromPartial(_: Partial<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  }
};
function createBaseGetConfigurationDescriptorResponse(): GetConfigurationDescriptorResponse {
  return {
    config: undefined
  };
}
export const GetConfigurationDescriptorResponse = {
  encode(message: GetConfigurationDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetConfigurationDescriptorResponse {
    return {
      config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse {
    const message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  }
};
function createBaseGetQueryServicesDescriptorRequest(): GetQueryServicesDescriptorRequest {
  return {};
}
export const GetQueryServicesDescriptorRequest = {
  encode(_: GetQueryServicesDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetQueryServicesDescriptorRequest {
    return {};
  },
  fromPartial(_: Partial<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  }
};
function createBaseGetQueryServicesDescriptorResponse(): GetQueryServicesDescriptorResponse {
  return {
    queries: undefined
  };
}
export const GetQueryServicesDescriptorResponse = {
  encode(message: GetQueryServicesDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetQueryServicesDescriptorResponse {
    return {
      queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
    };
  },
  fromPartial(object: Partial<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse {
    const message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  }
};
function createBaseGetTxDescriptorRequest(): GetTxDescriptorRequest {
  return {};
}
export const GetTxDescriptorRequest = {
  encode(_: GetTxDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetTxDescriptorRequest {
    return {};
  },
  fromPartial(_: Partial<GetTxDescriptorRequest>): GetTxDescriptorRequest {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  }
};
function createBaseGetTxDescriptorResponse(): GetTxDescriptorResponse {
  return {
    tx: undefined
  };
}
export const GetTxDescriptorResponse = {
  encode(message: GetTxDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetTxDescriptorResponse {
    return {
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },
  fromPartial(object: Partial<GetTxDescriptorResponse>): GetTxDescriptorResponse {
    const message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  }
};
function createBaseQueryServicesDescriptor(): QueryServicesDescriptor {
  return {
    queryServices: []
  };
}
export const QueryServicesDescriptor = {
  encode(message: QueryServicesDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryServicesDescriptor {
    return {
      queryServices: Array.isArray(object?.queryServices) ? object.queryServices.map((e: any) => QueryServiceDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryServicesDescriptor>): QueryServicesDescriptor {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = object.queryServices?.map(e => QueryServiceDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryServiceDescriptor(): QueryServiceDescriptor {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}
export const QueryServiceDescriptor = {
  encode(message: QueryServiceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryServiceDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      isModule: isSet(object.isModule) ? Boolean(object.isModule) : false,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => QueryMethodDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryServiceDescriptor>): QueryServiceDescriptor {
    const message = createBaseQueryServiceDescriptor();
    message.fullname = object.fullname ?? "";
    message.isModule = object.isModule ?? false;
    message.methods = object.methods?.map(e => QueryMethodDescriptor.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryMethodDescriptor(): QueryMethodDescriptor {
  return {
    name: "",
    fullQueryPath: ""
  };
}
export const QueryMethodDescriptor = {
  encode(message: QueryMethodDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },
  fromJSON(object: any): QueryMethodDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      fullQueryPath: isSet(object.fullQueryPath) ? String(object.fullQueryPath) : ""
    };
  },
  fromPartial(object: Partial<QueryMethodDescriptor>): QueryMethodDescriptor {
    const message = createBaseQueryMethodDescriptor();
    message.name = object.name ?? "";
    message.fullQueryPath = object.fullQueryPath ?? "";
    return message;
  }
};