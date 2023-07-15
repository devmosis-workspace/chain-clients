import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestSDKType {}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseSDKType {
  interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestSDKType {
  interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseSDKType {
  implementation_message_names: string[];
}
function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return {};
}
export const ListAllInterfacesRequest = {
  encode(_: ListAllInterfacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ListAllInterfacesRequest {
    return {};
  },
  fromPartial(_: Partial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  }
};
function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return {
    interfaceNames: []
  };
}
export const ListAllInterfacesResponse = {
  encode(message: ListAllInterfacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ListAllInterfacesResponse {
    return {
      interfaceNames: Array.isArray(object?.interfaceNames) ? object.interfaceNames.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map(e => e) || [];
    return message;
  }
};
function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return {
    interfaceName: ""
  };
}
export const ListImplementationsRequest = {
  encode(message: ListImplementationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },
  fromJSON(object: any): ListImplementationsRequest {
    return {
      interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : ""
    };
  },
  fromPartial(object: Partial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  }
};
function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return {
    implementationMessageNames: []
  };
}
export const ListImplementationsResponse = {
  encode(message: ListImplementationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ListImplementationsResponse {
    return {
      implementationMessageNames: Array.isArray(object?.implementationMessageNames) ? object.implementationMessageNames.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
    return message;
  }
};