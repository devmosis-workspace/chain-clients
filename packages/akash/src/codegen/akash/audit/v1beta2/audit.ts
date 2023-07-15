import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Provider stores owner auditor and attributes details */
export interface Provider {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
/** Provider stores owner auditor and attributes details */
export interface ProviderSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** Attributes */
export interface AuditedAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
/** Attributes */
export interface AuditedAttributesSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
  attributes: AuditedAttributes[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponseSDKType {
  attributes: AuditedAttributesSDKType[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
  auditors: string[];
  owners: string[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFiltersSDKType {
  auditors: string[];
  owners: string[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributesSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponseSDKType {}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  owner: string;
  auditor: string;
  keys: string[];
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributesSDKType {
  owner: string;
  auditor: string;
  keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponseSDKType {}
function createBaseProvider(): Provider {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Provider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAuditedAttributes(): AuditedAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const AuditedAttributes = {
  encode(message: AuditedAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AuditedAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AuditedAttributes>): AuditedAttributes {
    const message = createBaseAuditedAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAttributesResponse(): AttributesResponse {
  return {
    attributes: []
  };
}
export const AttributesResponse = {
  encode(message: AttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AttributesResponse {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AttributesResponse>): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAttributesFilters(): AttributesFilters {
  return {
    auditors: [],
    owners: []
  };
}
export const AttributesFilters = {
  encode(message: AttributesFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): AttributesFilters {
    return {
      auditors: Array.isArray(object?.auditors) ? object.auditors.map((e: any) => String(e)) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<AttributesFilters>): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map(e => e) || [];
    message.owners = object.owners?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const MsgSignProviderAttributes = {
  encode(message: MsgSignProviderAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSignProviderAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSignProviderAttributes>): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return {};
}
export const MsgSignProviderAttributesResponse = {
  encode(_: MsgSignProviderAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSignProviderAttributesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  }
};
function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
  return {
    owner: "",
    auditor: "",
    keys: []
  };
}
export const MsgDeleteProviderAttributes = {
  encode(message: MsgDeleteProviderAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteProviderAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return {};
}
export const MsgDeleteProviderAttributesResponse = {
  encode(_: MsgDeleteProviderAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteProviderAttributesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  }
};