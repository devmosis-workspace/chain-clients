import { Coin } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
export var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
    AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType || (AuthorizationType = {}));
export const AuthorizationTypeSDKType = AuthorizationType;
export const AuthorizationTypeAmino = AuthorizationType;
export function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHORIZATION_TYPE_DELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case "AUTHORIZATION_TYPE_UNDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case "AUTHORIZATION_TYPE_REDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
export function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
        case AuthorizationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseStakeAuthorization() {
    return {
        $typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        maxTokens: undefined,
        allowList: undefined,
        denyList: undefined,
        authorizationType: 0
    };
}
export const StakeAuthorization = {
    typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxTokens !== undefined) {
            Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allowList !== undefined) {
            StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
        }
        if (message.denyList !== undefined) {
            StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorizationType !== 0) {
            writer.uint32(32).int32(message.authorizationType);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            maxTokens: isSet(object.maxTokens) ? Coin.fromJSON(object.maxTokens) : undefined,
            allowList: isSet(object.allowList) ? StakeAuthorization_Validators.fromJSON(object.allowList) : undefined,
            denyList: isSet(object.denyList) ? StakeAuthorization_Validators.fromJSON(object.denyList) : undefined,
            authorizationType: isSet(object.authorizationType) ? authorizationTypeFromJSON(object.authorizationType) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization();
        message.maxTokens = object.maxTokens !== undefined && object.maxTokens !== null ? Coin.fromPartial(object.maxTokens) : undefined;
        message.allowList = object.allowList !== undefined && object.allowList !== null ? StakeAuthorization_Validators.fromPartial(object.allowList) : undefined;
        message.denyList = object.denyList !== undefined && object.denyList !== null ? StakeAuthorization_Validators.fromPartial(object.denyList) : undefined;
        message.authorizationType = object.authorizationType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStakeAuthorization();
        if (object.max_tokens !== undefined && object.max_tokens !== null) {
            message.maxTokens = Coin.fromAmino(object.max_tokens);
        }
        if (object.allow_list !== undefined && object.allow_list !== null) {
            message.allowList = StakeAuthorization_Validators.fromAmino(object.allow_list);
        }
        if (object.deny_list !== undefined && object.deny_list !== null) {
            message.denyList = StakeAuthorization_Validators.fromAmino(object.deny_list);
        }
        if (object.authorization_type !== undefined && object.authorization_type !== null) {
            message.authorizationType = authorizationTypeFromJSON(object.authorization_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_tokens = message.maxTokens ? Coin.toAmino(message.maxTokens) : undefined;
        obj.allow_list = message.allowList ? StakeAuthorization_Validators.toAmino(message.allowList) : undefined;
        obj.deny_list = message.denyList ? StakeAuthorization_Validators.toAmino(message.denyList) : undefined;
        obj.authorization_type = message.authorizationType;
        return obj;
    },
    fromAminoMsg(object) {
        return StakeAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StakeAuthorization",
            value: StakeAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StakeAuthorization.decode(message.value);
    },
    toProto(message) {
        return StakeAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
            value: StakeAuthorization.encode(message).finish()
        };
    }
};
function createBaseStakeAuthorization_Validators() {
    return {
        address: []
    };
}
export const StakeAuthorization_Validators = {
    typeUrl: "/cosmos.staking.v1beta1.Validators",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.address) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: Array.isArray(object?.address) ? object.address.map((e) => String(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.address) {
            obj.address = message.address.map(e => e);
        }
        else {
            obj.address = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return StakeAuthorization_Validators.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validators",
            value: StakeAuthorization_Validators.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StakeAuthorization_Validators.decode(message.value);
    },
    toProto(message) {
        return StakeAuthorization_Validators.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validators",
            value: StakeAuthorization_Validators.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map