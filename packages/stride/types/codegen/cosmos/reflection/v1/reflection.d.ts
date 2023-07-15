import { FileDescriptorProto, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestSDKType {
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
    /** files is the file descriptors. */
    files: FileDescriptorProto[];
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseSDKType {
    files: FileDescriptorProtoSDKType[];
}
export declare const FileDescriptorsRequest: {
    encode(_: FileDescriptorsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): FileDescriptorsRequest;
    fromPartial(_: Partial<FileDescriptorsRequest>): FileDescriptorsRequest;
};
export declare const FileDescriptorsResponse: {
    encode(message: FileDescriptorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FileDescriptorsResponse;
    fromPartial(object: Partial<FileDescriptorsResponse>): FileDescriptorsResponse;
};
