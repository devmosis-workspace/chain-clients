import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainQuery, MsgSubmitQueryResult, MsgRemoveInterchainQueryRequest, MsgUpdateInterchainQueryRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/neutron.interchainqueries.MsgRegisterInterchainQuery", MsgRegisterInterchainQuery], ["/neutron.interchainqueries.MsgSubmitQueryResult", MsgSubmitQueryResult], ["/neutron.interchainqueries.MsgRemoveInterchainQueryRequest", MsgRemoveInterchainQueryRequest], ["/neutron.interchainqueries.MsgUpdateInterchainQueryRequest", MsgUpdateInterchainQueryRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerInterchainQuery(value: MsgRegisterInterchainQuery) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
        value: MsgRegisterInterchainQuery.encode(value).finish()
      };
    },
    submitQueryResult(value: MsgSubmitQueryResult) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
        value: MsgSubmitQueryResult.encode(value).finish()
      };
    },
    removeInterchainQuery(value: MsgRemoveInterchainQueryRequest) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
        value: MsgRemoveInterchainQueryRequest.encode(value).finish()
      };
    },
    updateInterchainQuery(value: MsgUpdateInterchainQueryRequest) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
        value: MsgUpdateInterchainQueryRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerInterchainQuery(value: MsgRegisterInterchainQuery) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
        value
      };
    },
    submitQueryResult(value: MsgSubmitQueryResult) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
        value
      };
    },
    removeInterchainQuery(value: MsgRemoveInterchainQueryRequest) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
        value
      };
    },
    updateInterchainQuery(value: MsgUpdateInterchainQueryRequest) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
        value
      };
    }
  },
  fromJSON: {
    registerInterchainQuery(value: any) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
        value: MsgRegisterInterchainQuery.fromJSON(value)
      };
    },
    submitQueryResult(value: any) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
        value: MsgSubmitQueryResult.fromJSON(value)
      };
    },
    removeInterchainQuery(value: any) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
        value: MsgRemoveInterchainQueryRequest.fromJSON(value)
      };
    },
    updateInterchainQuery(value: any) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
        value: MsgUpdateInterchainQueryRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerInterchainQuery(value: MsgRegisterInterchainQuery) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
        value: MsgRegisterInterchainQuery.fromPartial(value)
      };
    },
    submitQueryResult(value: MsgSubmitQueryResult) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
        value: MsgSubmitQueryResult.fromPartial(value)
      };
    },
    removeInterchainQuery(value: MsgRemoveInterchainQueryRequest) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
        value: MsgRemoveInterchainQueryRequest.fromPartial(value)
      };
    },
    updateInterchainQuery(value: MsgUpdateInterchainQueryRequest) {
      return {
        typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
        value: MsgUpdateInterchainQueryRequest.fromPartial(value)
      };
    }
  }
};