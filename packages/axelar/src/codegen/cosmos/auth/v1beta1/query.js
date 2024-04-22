import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount, ModuleAccount } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
            value: QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
export const QueryAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => AccountI_FromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? AccountI_ToAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsResponse",
            value: QueryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
            value: QueryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
export const QueryAccountRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
            value: QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountResponse() {
    return {
        account: undefined
    };
}
export const QueryAccountResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = AccountI_FromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? AccountI_ToAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountResponse",
            value: QueryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
            value: QueryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountByNameRequest() {
    return {
        name: ""
    };
}
export const QueryModuleAccountByNameRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameRequest();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountByNameRequest();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountByNameRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountByNameRequest",
            value: QueryModuleAccountByNameRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountByNameRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountByNameRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
            value: QueryModuleAccountByNameRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountByNameResponse() {
    return {
        account: undefined
    };
}
export const QueryModuleAccountByNameResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        if (object.account !== undefined && object.account !== null) {
            message.account = ModuleAccountI_FromAmino(object.account);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? ModuleAccountI_ToAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountByNameResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountByNameResponse",
            value: QueryModuleAccountByNameResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountByNameResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountByNameResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
            value: QueryModuleAccountByNameResponse.encode(message).finish()
        };
    }
};
export const AccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return BaseAccount.decode(data.value);
        default:
            return data;
    }
};
export const AccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BaseAccount":
            return Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: BaseAccount.encode(BaseAccount.fromPartial(BaseAccount.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const AccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return {
                type: "cosmos-sdk/BaseAccount",
                value: BaseAccount.toAmino(BaseAccount.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
export const ModuleAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return ModuleAccount.decode(data.value);
        default:
            return data;
    }
};
export const ModuleAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ModuleAccount":
            return Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
                value: ModuleAccount.encode(ModuleAccount.fromPartial(ModuleAccount.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const ModuleAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return {
                type: "cosmos-sdk/ModuleAccount",
                value: ModuleAccount.toAmino(ModuleAccount.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=query.js.map