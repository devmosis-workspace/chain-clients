import { MsgVerifyInvariant } from "./tx";
export const registry = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: MsgVerifyInvariant.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value
            };
        }
    },
    fromJSON: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: MsgVerifyInvariant.fromJSON(value)
            };
        }
    },
    fromPartial: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: MsgVerifyInvariant.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map