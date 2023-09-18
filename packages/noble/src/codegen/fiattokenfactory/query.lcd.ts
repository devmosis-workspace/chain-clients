import { setPaginationParams } from "../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetBlacklistedRequest, QueryGetBlacklistedResponseSDKType, QueryAllBlacklistedRequest, QueryAllBlacklistedResponseSDKType, QueryGetPausedRequest, QueryGetPausedResponseSDKType, QueryGetMasterMinterRequest, QueryGetMasterMinterResponseSDKType, QueryGetMintersRequest, QueryGetMintersResponseSDKType, QueryAllMintersRequest, QueryAllMintersResponseSDKType, QueryGetPauserRequest, QueryGetPauserResponseSDKType, QueryGetBlacklisterRequest, QueryGetBlacklisterResponseSDKType, QueryGetOwnerRequest, QueryGetOwnerResponseSDKType, QueryGetMinterControllerRequest, QueryGetMinterControllerResponseSDKType, QueryAllMinterControllerRequest, QueryAllMinterControllerResponseSDKType, QueryGetMintingDenomRequest, QueryGetMintingDenomResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.blacklisted = this.blacklisted.bind(this);
    this.blacklistedAll = this.blacklistedAll.bind(this);
    this.paused = this.paused.bind(this);
    this.masterMinter = this.masterMinter.bind(this);
    this.minters = this.minters.bind(this);
    this.mintersAll = this.mintersAll.bind(this);
    this.pauser = this.pauser.bind(this);
    this.blacklister = this.blacklister.bind(this);
    this.owner = this.owner.bind(this);
    this.minterController = this.minterController.bind(this);
    this.minterControllerAll = this.minterControllerAll.bind(this);
    this.mintingDenom = this.mintingDenom.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Blacklisted by index. */
  async blacklisted(params: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/blacklisted/${params.address}`;
    return await this.req.get<QueryGetBlacklistedResponseSDKType>(endpoint);
  }
  /* Queries a list of Blacklisted items. */
  async blacklistedAll(params: QueryAllBlacklistedRequest = {
    pagination: undefined
  }): Promise<QueryAllBlacklistedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `noble/fiattokenfactory/blacklisted`;
    return await this.req.get<QueryAllBlacklistedResponseSDKType>(endpoint, options);
  }
  /* Queries a Paused by index. */
  async paused(_params: QueryGetPausedRequest = {}): Promise<QueryGetPausedResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/paused`;
    return await this.req.get<QueryGetPausedResponseSDKType>(endpoint);
  }
  /* Queries a MasterMinter by index. */
  async masterMinter(_params: QueryGetMasterMinterRequest = {}): Promise<QueryGetMasterMinterResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/master_minter`;
    return await this.req.get<QueryGetMasterMinterResponseSDKType>(endpoint);
  }
  /* Queries a Minters by index. */
  async minters(params: QueryGetMintersRequest): Promise<QueryGetMintersResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/minters/${params.address}`;
    return await this.req.get<QueryGetMintersResponseSDKType>(endpoint);
  }
  /* Queries a list of Minters items. */
  async mintersAll(params: QueryAllMintersRequest = {
    pagination: undefined
  }): Promise<QueryAllMintersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `noble/fiattokenfactory/minters`;
    return await this.req.get<QueryAllMintersResponseSDKType>(endpoint, options);
  }
  /* Queries a Pauser by index. */
  async pauser(_params: QueryGetPauserRequest = {}): Promise<QueryGetPauserResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/pauser`;
    return await this.req.get<QueryGetPauserResponseSDKType>(endpoint);
  }
  /* Queries a Blacklister by index. */
  async blacklister(_params: QueryGetBlacklisterRequest = {}): Promise<QueryGetBlacklisterResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/blacklister`;
    return await this.req.get<QueryGetBlacklisterResponseSDKType>(endpoint);
  }
  /* Queries a Owner by index. */
  async owner(_params: QueryGetOwnerRequest = {}): Promise<QueryGetOwnerResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/owner`;
    return await this.req.get<QueryGetOwnerResponseSDKType>(endpoint);
  }
  /* Queries a MinterController by index. */
  async minterController(params: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/minter_controller/${params.controllerAddress}`;
    return await this.req.get<QueryGetMinterControllerResponseSDKType>(endpoint);
  }
  /* Queries a list of MinterController items. */
  async minterControllerAll(params: QueryAllMinterControllerRequest = {
    pagination: undefined
  }): Promise<QueryAllMinterControllerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `noble/fiattokenfactory/minter_controller`;
    return await this.req.get<QueryAllMinterControllerResponseSDKType>(endpoint, options);
  }
  /* Queries a MintingDenom by index. */
  async mintingDenom(_params: QueryGetMintingDenomRequest = {}): Promise<QueryGetMintingDenomResponseSDKType> {
    const endpoint = `noble/fiattokenfactory/minting_denom`;
    return await this.req.get<QueryGetMintingDenomResponseSDKType>(endpoint);
  }
}