import { MsgCreateVestingAccount } from "./tx";
export const registry = [["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: MsgCreateVestingAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value
            };
        }
    },
    fromJSON: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: MsgCreateVestingAccount.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createVestingAccount(value) {
            return {
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: MsgCreateVestingAccount.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map