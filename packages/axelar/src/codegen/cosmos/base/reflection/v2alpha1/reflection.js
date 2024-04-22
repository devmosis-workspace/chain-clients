import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseAppDescriptor() {
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
    typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
            chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
            codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
            configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
            queryServices: isSet(object.queryServices) ? QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
            tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseAppDescriptor();
        message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
        message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
        message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
        message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
        message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
        message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAppDescriptor();
        if (object.authn !== undefined && object.authn !== null) {
            message.authn = AuthnDescriptor.fromAmino(object.authn);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = ChainDescriptor.fromAmino(object.chain);
        }
        if (object.codec !== undefined && object.codec !== null) {
            message.codec = CodecDescriptor.fromAmino(object.codec);
        }
        if (object.configuration !== undefined && object.configuration !== null) {
            message.configuration = ConfigurationDescriptor.fromAmino(object.configuration);
        }
        if (object.query_services !== undefined && object.query_services !== null) {
            message.queryServices = QueryServicesDescriptor.fromAmino(object.query_services);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = TxDescriptor.fromAmino(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
        obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
        obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
        obj.configuration = message.configuration ? ConfigurationDescriptor.toAmino(message.configuration) : undefined;
        obj.query_services = message.queryServices ? QueryServicesDescriptor.toAmino(message.queryServices) : undefined;
        obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AppDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AppDescriptor",
            value: AppDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AppDescriptor.decode(message.value);
    },
    toProto(message) {
        return AppDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
            value: AppDescriptor.encode(message).finish()
        };
    }
};
function createBaseTxDescriptor() {
    return {
        fullname: "",
        msgs: []
    };
}
export const TxDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.msgs) {
            MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => MsgDescriptor.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseTxDescriptor();
        message.fullname = object.fullname ?? "";
        message.msgs = object.msgs?.map(e => MsgDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        message.msgs = object.msgs?.map(e => MsgDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDescriptor",
            value: TxDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxDescriptor.decode(message.value);
    },
    toProto(message) {
        return TxDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
            value: TxDescriptor.encode(message).finish()
        };
    }
};
function createBaseAuthnDescriptor() {
    return {
        signModes: []
    };
}
export const AuthnDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signModes) {
            SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            signModes: Array.isArray(object?.signModes) ? object.signModes.map((e) => SigningModeDescriptor.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseAuthnDescriptor();
        message.signModes = object.signModes?.map(e => SigningModeDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuthnDescriptor();
        message.signModes = object.sign_modes?.map(e => SigningModeDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signModes) {
            obj.sign_modes = message.signModes.map(e => e ? SigningModeDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AuthnDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthnDescriptor",
            value: AuthnDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AuthnDescriptor.decode(message.value);
    },
    toProto(message) {
        return AuthnDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
            value: AuthnDescriptor.encode(message).finish()
        };
    }
};
function createBaseSigningModeDescriptor() {
    return {
        name: "",
        number: 0,
        authnInfoProviderMethodFullname: ""
    };
}
export const SigningModeDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            authnInfoProviderMethodFullname: isSet(object.authnInfoProviderMethodFullname) ? String(object.authnInfoProviderMethodFullname) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseSigningModeDescriptor();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningModeDescriptor();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        if (object.authn_info_provider_method_fullname !== undefined && object.authn_info_provider_method_fullname !== null) {
            message.authnInfoProviderMethodFullname = object.authn_info_provider_method_fullname;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.number = message.number;
        obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningModeDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningModeDescriptor",
            value: SigningModeDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SigningModeDescriptor.decode(message.value);
    },
    toProto(message) {
        return SigningModeDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
            value: SigningModeDescriptor.encode(message).finish()
        };
    }
};
function createBaseChainDescriptor() {
    return {
        id: ""
    };
}
export const ChainDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseChainDescriptor();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainDescriptor();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChainDescriptor",
            value: ChainDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ChainDescriptor.decode(message.value);
    },
    toProto(message) {
        return ChainDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
            value: ChainDescriptor.encode(message).finish()
        };
    }
};
function createBaseCodecDescriptor() {
    return {
        interfaces: []
    };
}
export const CodecDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.interfaces) {
            InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => InterfaceDescriptor.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCodecDescriptor();
        message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCodecDescriptor();
        message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CodecDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CodecDescriptor",
            value: CodecDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CodecDescriptor.decode(message.value);
    },
    toProto(message) {
        return CodecDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
            value: CodecDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceDescriptor() {
    return {
        fullname: "",
        interfaceAcceptingMessages: [],
        interfaceImplementers: []
    };
}
export const InterfaceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.interfaceAcceptingMessages) {
            InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.interfaceImplementers) {
            InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            interfaceAcceptingMessages: Array.isArray(object?.interfaceAcceptingMessages) ? object.interfaceAcceptingMessages.map((e) => InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
            interfaceImplementers: Array.isArray(object?.interfaceImplementers) ? object.interfaceImplementers.map((e) => InterfaceImplementerDescriptor.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.fullname = object.fullname ?? "";
        message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
        message.interfaceImplementers = object.interfaceImplementers?.map(e => InterfaceImplementerDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterfaceDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        message.interfaceAcceptingMessages = object.interface_accepting_messages?.map(e => InterfaceAcceptingMessageDescriptor.fromAmino(e)) || [];
        message.interfaceImplementers = object.interface_implementers?.map(e => InterfaceImplementerDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.interfaceAcceptingMessages) {
            obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interfaceImplementers) {
            obj.interface_implementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceDescriptor",
            value: InterfaceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterfaceDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
            value: InterfaceDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceImplementerDescriptor() {
    return {
        fullname: "",
        typeUrl: ""
    };
}
export const InterfaceImplementerDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.typeUrl !== "") {
            writer.uint32(18).string(message.typeUrl);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseInterfaceImplementerDescriptor();
        message.fullname = object.fullname ?? "";
        message.typeUrl = object.typeUrl ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterfaceImplementerDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        if (object.type_url !== undefined && object.type_url !== null) {
            message.typeUrl = object.type_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.type_url = message.typeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceImplementerDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceImplementerDescriptor",
            value: InterfaceImplementerDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterfaceImplementerDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceImplementerDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
            value: InterfaceImplementerDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
    return {
        fullname: "",
        fieldDescriptorNames: []
    };
}
export const InterfaceAcceptingMessageDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.fieldDescriptorNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            fieldDescriptorNames: Array.isArray(object?.fieldDescriptorNames) ? object.fieldDescriptorNames.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = object.fullname ?? "";
        message.fieldDescriptorNames = object.fieldDescriptorNames?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        message.fieldDescriptorNames = object.field_descriptor_names?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.fieldDescriptorNames) {
            obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
            value: InterfaceAcceptingMessageDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterfaceAcceptingMessageDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceAcceptingMessageDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
            value: InterfaceAcceptingMessageDescriptor.encode(message).finish()
        };
    }
};
function createBaseConfigurationDescriptor() {
    return {
        bech32AccountAddressPrefix: ""
    };
}
export const ConfigurationDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bech32AccountAddressPrefix !== "") {
            writer.uint32(10).string(message.bech32AccountAddressPrefix);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            bech32AccountAddressPrefix: isSet(object.bech32AccountAddressPrefix) ? String(object.bech32AccountAddressPrefix) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseConfigurationDescriptor();
        message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfigurationDescriptor();
        if (object.bech32_account_address_prefix !== undefined && object.bech32_account_address_prefix !== null) {
            message.bech32AccountAddressPrefix = object.bech32_account_address_prefix;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigurationDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigurationDescriptor",
            value: ConfigurationDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigurationDescriptor.decode(message.value);
    },
    toProto(message) {
        return ConfigurationDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
            value: ConfigurationDescriptor.encode(message).finish()
        };
    }
};
function createBaseMsgDescriptor() {
    return {
        msgTypeUrl: ""
    };
}
export const MsgDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(10).string(message.msgTypeUrl);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgDescriptor();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDescriptor();
        if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
            message.msgTypeUrl = object.msg_type_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDescriptor",
            value: MsgDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDescriptor.decode(message.value);
    },
    toProto(message) {
        return MsgDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
            value: MsgDescriptor.encode(message).finish()
        };
    }
};
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
export const GetAuthnDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetAuthnDescriptorRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetAuthnDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetAuthnDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorRequest",
            value: GetAuthnDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetAuthnDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetAuthnDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
            value: GetAuthnDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetAuthnDescriptorResponse() {
    return {
        authn: undefined
    };
}
export const GetAuthnDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authn !== undefined) {
            AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        if (object.authn !== undefined && object.authn !== null) {
            message.authn = AuthnDescriptor.fromAmino(object.authn);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetAuthnDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorResponse",
            value: GetAuthnDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetAuthnDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetAuthnDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
            value: GetAuthnDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetChainDescriptorRequest() {
    return {};
}
export const GetChainDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetChainDescriptorRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetChainDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetChainDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorRequest",
            value: GetChainDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetChainDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetChainDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
            value: GetChainDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetChainDescriptorResponse() {
    return {
        chain: undefined
    };
}
export const GetChainDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== undefined) {
            ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetChainDescriptorResponse();
        message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetChainDescriptorResponse();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = ChainDescriptor.fromAmino(object.chain);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetChainDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorResponse",
            value: GetChainDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetChainDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetChainDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
            value: GetChainDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetCodecDescriptorRequest() {
    return {};
}
export const GetCodecDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetCodecDescriptorRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetCodecDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetCodecDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorRequest",
            value: GetCodecDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetCodecDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetCodecDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
            value: GetCodecDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetCodecDescriptorResponse() {
    return {
        codec: undefined
    };
}
export const GetCodecDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.codec !== undefined) {
            CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetCodecDescriptorResponse();
        message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetCodecDescriptorResponse();
        if (object.codec !== undefined && object.codec !== null) {
            message.codec = CodecDescriptor.fromAmino(object.codec);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetCodecDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorResponse",
            value: GetCodecDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetCodecDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetCodecDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
            value: GetCodecDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
export const GetConfigurationDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetConfigurationDescriptorRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetConfigurationDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetConfigurationDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorRequest",
            value: GetConfigurationDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetConfigurationDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetConfigurationDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
            value: GetConfigurationDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetConfigurationDescriptorResponse() {
    return {
        config: undefined
    };
}
export const GetConfigurationDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.config !== undefined) {
            ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = ConfigurationDescriptor.fromAmino(object.config);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? ConfigurationDescriptor.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetConfigurationDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorResponse",
            value: GetConfigurationDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetConfigurationDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetConfigurationDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
            value: GetConfigurationDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
export const GetQueryServicesDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetQueryServicesDescriptorRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetQueryServicesDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetQueryServicesDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
            value: GetQueryServicesDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetQueryServicesDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetQueryServicesDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
            value: GetQueryServicesDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetQueryServicesDescriptorResponse() {
    return {
        queries: undefined
    };
}
export const GetQueryServicesDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.queries !== undefined) {
            QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        if (object.queries !== undefined && object.queries !== null) {
            message.queries = QueryServicesDescriptor.fromAmino(object.queries);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.queries = message.queries ? QueryServicesDescriptor.toAmino(message.queries) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetQueryServicesDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
            value: GetQueryServicesDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetQueryServicesDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetQueryServicesDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
            value: GetQueryServicesDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxDescriptorRequest() {
    return {};
}
export const GetTxDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseGetTxDescriptorRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetTxDescriptorRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorRequest",
            value: GetTxDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetTxDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
            value: GetTxDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxDescriptorResponse() {
    return {
        tx: undefined
    };
}
export const GetTxDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx !== undefined) {
            TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGetTxDescriptorResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTxDescriptorResponse();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = TxDescriptor.fromAmino(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorResponse",
            value: GetTxDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
            value: GetTxDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryServicesDescriptor() {
    return {
        queryServices: []
    };
}
export const QueryServicesDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.queryServices) {
            QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            queryServices: Array.isArray(object?.queryServices) ? object.queryServices.map((e) => QueryServiceDescriptor.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryServicesDescriptor();
        message.queryServices = object.queryServices?.map(e => QueryServiceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryServicesDescriptor();
        message.queryServices = object.query_services?.map(e => QueryServiceDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.queryServices) {
            obj.query_services = message.queryServices.map(e => e ? QueryServiceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryServicesDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServicesDescriptor",
            value: QueryServicesDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryServicesDescriptor.decode(message.value);
    },
    toProto(message) {
        return QueryServicesDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
            value: QueryServicesDescriptor.encode(message).finish()
        };
    }
};
function createBaseQueryServiceDescriptor() {
    return {
        fullname: "",
        isModule: false,
        methods: []
    };
}
export const QueryServiceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.isModule === true) {
            writer.uint32(16).bool(message.isModule);
        }
        for (const v of message.methods) {
            QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            isModule: isSet(object.isModule) ? Boolean(object.isModule) : false,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => QueryMethodDescriptor.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseQueryServiceDescriptor();
        message.fullname = object.fullname ?? "";
        message.isModule = object.isModule ?? false;
        message.methods = object.methods?.map(e => QueryMethodDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryServiceDescriptor();
        if (object.fullname !== undefined && object.fullname !== null) {
            message.fullname = object.fullname;
        }
        if (object.is_module !== undefined && object.is_module !== null) {
            message.isModule = object.is_module;
        }
        message.methods = object.methods?.map(e => QueryMethodDescriptor.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.is_module = message.isModule;
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryServiceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServiceDescriptor",
            value: QueryServiceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryServiceDescriptor.decode(message.value);
    },
    toProto(message) {
        return QueryServiceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
            value: QueryServiceDescriptor.encode(message).finish()
        };
    }
};
function createBaseQueryMethodDescriptor() {
    return {
        name: "",
        fullQueryPath: ""
    };
}
export const QueryMethodDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.fullQueryPath !== "") {
            writer.uint32(18).string(message.fullQueryPath);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            fullQueryPath: isSet(object.fullQueryPath) ? String(object.fullQueryPath) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryMethodDescriptor();
        message.name = object.name ?? "";
        message.fullQueryPath = object.fullQueryPath ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMethodDescriptor();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.full_query_path !== undefined && object.full_query_path !== null) {
            message.fullQueryPath = object.full_query_path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.full_query_path = message.fullQueryPath;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMethodDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryMethodDescriptor",
            value: QueryMethodDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryMethodDescriptor.decode(message.value);
    },
    toProto(message) {
        return QueryMethodDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
            value: QueryMethodDescriptor.encode(message).finish()
        };
    }
};
//# sourceMappingURL=reflection.js.map