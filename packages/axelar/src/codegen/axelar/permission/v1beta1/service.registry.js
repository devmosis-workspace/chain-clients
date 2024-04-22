export const registry = [["/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest", axelar.permission.v1beta1.RegisterControllerRequest], ["/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest", axelar.permission.v1beta1.DeregisterControllerRequest], ["/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest", axelar.permission.v1beta1.UpdateGovernanceKeyRequest]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        registerController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
                value: axelar.permission.v1beta1.RegisterControllerRequest.encode(value).finish()
            };
        },
        deregisterController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
                value: axelar.permission.v1beta1.DeregisterControllerRequest.encode(value).finish()
            };
        },
        updateGovernanceKey(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
                value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        registerController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
                value
            };
        },
        deregisterController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
                value
            };
        },
        updateGovernanceKey(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
                value
            };
        }
    },
    fromJSON: {
        registerController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
                value: axelar.permission.v1beta1.RegisterControllerRequest.fromJSON(value)
            };
        },
        deregisterController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
                value: axelar.permission.v1beta1.DeregisterControllerRequest.fromJSON(value)
            };
        },
        updateGovernanceKey(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
                value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest.fromJSON(value)
            };
        }
    },
    fromPartial: {
        registerController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.RegisterControllerRequest",
                value: axelar.permission.v1beta1.RegisterControllerRequest.fromPartial(value)
            };
        },
        deregisterController(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.DeregisterControllerRequest",
                value: axelar.permission.v1beta1.DeregisterControllerRequest.fromPartial(value)
            };
        },
        updateGovernanceKey(value) {
            return {
                typeUrl: "/axelar.permission.v1beta1.axelar.permission.v1beta1.UpdateGovernanceKeyRequest",
                value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=service.registry.js.map