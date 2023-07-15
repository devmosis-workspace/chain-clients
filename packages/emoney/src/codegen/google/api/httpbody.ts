import { Any, AnySDKType } from "../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 * 
 * 
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 * 
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 * 
 * Example:
 * 
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 * 
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *     }
 * 
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody) returns
 *       (google.protobuf.Empty);
 *     }
 * 
 * Example with streaming methods:
 * 
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *     }
 * 
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType: string;
  /** The HTTP request/response body as raw binary. */
  data: Uint8Array;
  /**
   * Application specific response metadata. Must be set in the first response
   * for streaming APIs.
   */
  extensions: Any[];
}
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 * 
 * 
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 * 
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 * 
 * Example:
 * 
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 * 
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *     }
 * 
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody) returns
 *       (google.protobuf.Empty);
 *     }
 * 
 * Example with streaming methods:
 * 
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *     }
 * 
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBodySDKType {
  content_type: string;
  data: Uint8Array;
  extensions: AnySDKType[];
}
function createBaseHttpBody(): HttpBody {
  return {
    contentType: "",
    data: new Uint8Array(),
    extensions: []
  };
}
export const HttpBody = {
  encode(message: HttpBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): HttpBody {
    return {
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<HttpBody>): HttpBody {
    const message = createBaseHttpBody();
    message.contentType = object.contentType ?? "";
    message.data = object.data ?? new Uint8Array();
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};