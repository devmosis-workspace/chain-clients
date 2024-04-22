import { MsgUnjail } from "./tx";
export const registry = [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: MsgUnjail.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value
            };
        }
    },
    fromJSON: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: MsgUnjail.fromJSON(value)
            };
        }
    },
    fromPartial: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: MsgUnjail.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map