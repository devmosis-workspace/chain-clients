import * as _102 from "../burrow/spec";
export declare const spec: {
    TemplateAccount: {
        typeUrl: string;
        encode(message: _102.TemplateAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _102.TemplateAccount;
        fromPartial(object: Partial<_102.TemplateAccount>): _102.TemplateAccount;
        fromAmino(object: _102.TemplateAccountAmino): _102.TemplateAccount;
        toAmino(message: _102.TemplateAccount): _102.TemplateAccountAmino;
        fromAminoMsg(object: _102.TemplateAccountAminoMsg): _102.TemplateAccount;
        fromProtoMsg(message: _102.TemplateAccountProtoMsg): _102.TemplateAccount;
        toProto(message: _102.TemplateAccount): Uint8Array;
        toProtoMsg(message: _102.TemplateAccount): _102.TemplateAccountProtoMsg;
    };
};
