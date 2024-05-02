import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegister, MsgDeregister, MsgSetRegistry } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.tokenregistry.v1.MsgRegister", MsgRegister], ["/sifnode.tokenregistry.v1.MsgDeregister", MsgDeregister], ["/sifnode.tokenregistry.v1.MsgSetRegistry", MsgSetRegistry]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    register(value: MsgRegister) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgRegister",
        value: MsgRegister.encode(value).finish()
      };
    },
    deregister(value: MsgDeregister) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister",
        value: MsgDeregister.encode(value).finish()
      };
    },
    setRegistry(value: MsgSetRegistry) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry",
        value: MsgSetRegistry.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    register(value: MsgRegister) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgRegister",
        value
      };
    },
    deregister(value: MsgDeregister) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister",
        value
      };
    },
    setRegistry(value: MsgSetRegistry) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry",
        value
      };
    }
  },
  fromJSON: {
    register(value: any) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgRegister",
        value: MsgRegister.fromJSON(value)
      };
    },
    deregister(value: any) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister",
        value: MsgDeregister.fromJSON(value)
      };
    },
    setRegistry(value: any) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry",
        value: MsgSetRegistry.fromJSON(value)
      };
    }
  },
  fromPartial: {
    register(value: MsgRegister) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgRegister",
        value: MsgRegister.fromPartial(value)
      };
    },
    deregister(value: MsgDeregister) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister",
        value: MsgDeregister.fromPartial(value)
      };
    },
    setRegistry(value: MsgSetRegistry) {
      return {
        typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry",
        value: MsgSetRegistry.fromPartial(value)
      };
    }
  }
};