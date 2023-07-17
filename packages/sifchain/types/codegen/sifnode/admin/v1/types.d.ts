import * as _m0 from "protobufjs/minimal";
export declare enum AdminType {
    CLPDEX = 0,
    PMTPREWARDS = 1,
    TOKENREGISTRY = 2,
    ETHBRIDGE = 3,
    ADMIN = 4,
    MARGIN = 5,
    UNRECOGNIZED = -1
}
export declare const AdminTypeSDKType: typeof AdminType;
export declare function adminTypeFromJSON(object: any): AdminType;
export declare function adminTypeToJSON(object: AdminType): string;
export interface GenesisState {
    adminAccounts: AdminAccount[];
}
export interface GenesisStateSDKType {
    admin_accounts: AdminAccountSDKType[];
}
export interface AdminAccount {
    adminType: AdminType;
    adminAddress: string;
}
export interface AdminAccountSDKType {
    admin_type: AdminType;
    admin_address: string;
}
export interface Params {
    submitProposalFee: string;
}
export interface ParamsSDKType {
    submit_proposal_fee: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const AdminAccount: {
    encode(message: AdminAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AdminAccount;
    fromPartial(object: Partial<AdminAccount>): AdminAccount;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
