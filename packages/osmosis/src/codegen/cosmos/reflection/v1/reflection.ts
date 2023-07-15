import { FileDescriptorProto, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestSDKType {}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseSDKType {
  files: FileDescriptorProtoSDKType[];
}
function createBaseFileDescriptorsRequest(): FileDescriptorsRequest {
  return {};
}
export const FileDescriptorsRequest = {
  encode(_: FileDescriptorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): FileDescriptorsRequest {
    return {};
  },
  fromPartial(_: Partial<FileDescriptorsRequest>): FileDescriptorsRequest {
    const message = createBaseFileDescriptorsRequest();
    return message;
  }
};
function createBaseFileDescriptorsResponse(): FileDescriptorsResponse {
  return {
    files: []
  };
}
export const FileDescriptorsResponse = {
  encode(message: FileDescriptorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FileDescriptorsResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => FileDescriptorProto.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FileDescriptorsResponse>): FileDescriptorsResponse {
    const message = createBaseFileDescriptorsResponse();
    message.files = object.files?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  }
};