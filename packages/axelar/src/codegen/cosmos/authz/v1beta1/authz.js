import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
function createBaseGenericAuthorization() {
    return {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: ""
    };
}
export const GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            msg: isSet(object.msg) ? String(object.msg) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenericAuthorization();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: undefined,
        expiration: Timestamp.fromPartial({})
    };
}
export const Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = Authorization_FromAmino(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = Timestamp.fromAmino(object.expiration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? Authorization_ToAmino(message.authorization) : undefined;
        obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: Grant.encode(message).finish()
        };
    }
};
function createBaseGrantAuthorization() {
    return {
        granter: "",
        grantee: "",
        authorization: undefined,
        expiration: Timestamp.fromPartial({})
    };
}
export const GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(message.expiration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrantAuthorization();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.authorization !== undefined && object.authorization !== null) {
            message.authorization = Authorization_FromAmino(object.authorization);
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = Timestamp.fromAmino(object.expiration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.authorization = message.authorization ? Authorization_ToAmino(message.authorization) : undefined;
        obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: GrantAuthorization.encode(message).finish()
        };
    }
};
export const Authorization_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return GenericAuthorization.decode(data.value);
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return SendAuthorization.decode(data.value);
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return StakeAuthorization.decode(data.value);
        default:
            return data;
    }
};
export const Authorization_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/GenericAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                value: GenericAuthorization.encode(GenericAuthorization.fromPartial(GenericAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SendAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
                value: SendAuthorization.encode(SendAuthorization.fromPartial(SendAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/StakeAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
                value: StakeAuthorization.encode(StakeAuthorization.fromPartial(StakeAuthorization.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Authorization_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return {
                type: "cosmos-sdk/GenericAuthorization",
                value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return {
                type: "cosmos-sdk/SendAuthorization",
                value: SendAuthorization.toAmino(SendAuthorization.decode(content.value, undefined))
            };
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return {
                type: "cosmos-sdk/StakeAuthorization",
                value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=authz.js.map