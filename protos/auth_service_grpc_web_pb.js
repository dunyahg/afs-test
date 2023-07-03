/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: auth_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var auth_pb = require('./auth_pb.js')
const proto = {};
proto.auth = require('./auth_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthenticationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthenticationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.auth.PublicTokenResponse>}
 */
const methodDescriptor_AuthenticationService_request_public_token = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/request_public_token',
  grpc.web.MethodType.UNARY,
  common_pb.Empty,
  auth_pb.PublicTokenResponse,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.PublicTokenResponse.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.PublicTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.PublicTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.request_public_token =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/request_public_token',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_request_public_token,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.PublicTokenResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.request_public_token =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/request_public_token',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_request_public_token);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.LoginRequest,
 *   !proto.common.StringValue>}
 */
const methodDescriptor_AuthenticationService_login = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/login',
  grpc.web.MethodType.UNARY,
  auth_pb.LoginRequest,
  common_pb.StringValue,
  /**
   * @param {!proto.auth.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/login',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_login,
      callback);
};


/**
 * @param {!proto.auth.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.StringValue>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/login',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.common.Empty>}
 */
const methodDescriptor_AuthenticationService_logout = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/logout',
  grpc.web.MethodType.UNARY,
  common_pb.Empty,
  common_pb.Empty,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/logout',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_logout,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/logout',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.LogoutFromAllDevicesRequest,
 *   !proto.common.Empty>}
 */
const methodDescriptor_AuthenticationService_logout_all = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/logout_all',
  grpc.web.MethodType.UNARY,
  auth_pb.LogoutFromAllDevicesRequest,
  common_pb.Empty,
  /**
   * @param {!proto.auth.LogoutFromAllDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.auth.LogoutFromAllDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.logout_all =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/logout_all',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_logout_all,
      callback);
};


/**
 * @param {!proto.auth.LogoutFromAllDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.logout_all =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/logout_all',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_logout_all);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.RegisterUserRequest,
 *   !proto.common.StringValue>}
 */
const methodDescriptor_AuthenticationService_register_user = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/register_user',
  grpc.web.MethodType.UNARY,
  auth_pb.RegisterUserRequest,
  common_pb.StringValue,
  /**
   * @param {!proto.auth.RegisterUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.auth.RegisterUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.register_user =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/register_user',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_register_user,
      callback);
};


/**
 * @param {!proto.auth.RegisterUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.StringValue>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.register_user =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/register_user',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_register_user);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.RegisterRiderRequest,
 *   !proto.common.StringValue>}
 */
const methodDescriptor_AuthenticationService_register_rider = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/register_rider',
  grpc.web.MethodType.UNARY,
  auth_pb.RegisterRiderRequest,
  common_pb.StringValue,
  /**
   * @param {!proto.auth.RegisterRiderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.auth.RegisterRiderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.register_rider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/register_rider',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_register_rider,
      callback);
};


/**
 * @param {!proto.auth.RegisterRiderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.StringValue>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.register_rider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/register_rider',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_register_rider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.common.StringValue>}
 */
const methodDescriptor_AuthenticationService_refresh_user_token = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/refresh_user_token',
  grpc.web.MethodType.UNARY,
  common_pb.Empty,
  common_pb.StringValue,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.refresh_user_token =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/refresh_user_token',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_refresh_user_token,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.StringValue>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.refresh_user_token =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/refresh_user_token',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_refresh_user_token);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.common.BoolValue>}
 */
const methodDescriptor_AuthenticationService_validate_token = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/validate_token',
  grpc.web.MethodType.UNARY,
  common_pb.Empty,
  common_pb.BoolValue,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.BoolValue.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.BoolValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.BoolValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.validate_token =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/validate_token',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_validate_token,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.BoolValue>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.validate_token =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/validate_token',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_validate_token);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.auth.CurrentUserResponse>}
 */
const methodDescriptor_AuthenticationService_get_current_user = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/get_current_user',
  grpc.web.MethodType.UNARY,
  common_pb.Empty,
  auth_pb.CurrentUserResponse,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.CurrentUserResponse.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.CurrentUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.CurrentUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.get_current_user =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/get_current_user',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_current_user,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.CurrentUserResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.get_current_user =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/get_current_user',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_current_user);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UpdateCurrentUserRequest,
 *   !proto.auth.UserAccount>}
 */
const methodDescriptor_AuthenticationService_update_current_user = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/update_current_user',
  grpc.web.MethodType.UNARY,
  auth_pb.UpdateCurrentUserRequest,
  auth_pb.UserAccount,
  /**
   * @param {!proto.auth.UpdateCurrentUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.UserAccount.deserializeBinary
);


/**
 * @param {!proto.auth.UpdateCurrentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.update_current_user =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/update_current_user',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_update_current_user,
      callback);
};


/**
 * @param {!proto.auth.UpdateCurrentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserAccount>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.update_current_user =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/update_current_user',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_update_current_user);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.GetAccountByTypeRequest,
 *   !proto.auth.UserAccountList>}
 */
const methodDescriptor_AuthenticationService_get_accounts_by_type = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/get_accounts_by_type',
  grpc.web.MethodType.UNARY,
  auth_pb.GetAccountByTypeRequest,
  auth_pb.UserAccountList,
  /**
   * @param {!proto.auth.GetAccountByTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.UserAccountList.deserializeBinary
);


/**
 * @param {!proto.auth.GetAccountByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserAccountList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserAccountList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.get_accounts_by_type =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/get_accounts_by_type',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_accounts_by_type,
      callback);
};


/**
 * @param {!proto.auth.GetAccountByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserAccountList>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.get_accounts_by_type =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/get_accounts_by_type',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_accounts_by_type);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UpdateAccountStatusRequest,
 *   !proto.common.Empty>}
 */
const methodDescriptor_AuthenticationService_update_user_status = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/update_user_status',
  grpc.web.MethodType.UNARY,
  auth_pb.UpdateAccountStatusRequest,
  common_pb.Empty,
  /**
   * @param {!proto.auth.UpdateAccountStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.auth.UpdateAccountStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.update_user_status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/update_user_status',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_update_user_status,
      callback);
};


/**
 * @param {!proto.auth.UpdateAccountStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.update_user_status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/update_user_status',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_update_user_status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.StringValue,
 *   !proto.auth.UserAccount>}
 */
const methodDescriptor_AuthenticationService_get_user_by_id = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/get_user_by_id',
  grpc.web.MethodType.UNARY,
  common_pb.StringValue,
  auth_pb.UserAccount,
  /**
   * @param {!proto.common.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.UserAccount.deserializeBinary
);


/**
 * @param {!proto.common.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.get_user_by_id =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/get_user_by_id',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_user_by_id,
      callback);
};


/**
 * @param {!proto.common.StringValue} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserAccount>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.get_user_by_id =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/get_user_by_id',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_user_by_id);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.StringValue,
 *   !proto.auth.UserAccount>}
 */
const methodDescriptor_AuthenticationService_get_user_by_phone_number = new grpc.web.MethodDescriptor(
  '/auth.AuthenticationService/get_user_by_phone_number',
  grpc.web.MethodType.UNARY,
  common_pb.StringValue,
  auth_pb.UserAccount,
  /**
   * @param {!proto.common.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.UserAccount.deserializeBinary
);


/**
 * @param {!proto.common.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthenticationServiceClient.prototype.get_user_by_phone_number =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthenticationService/get_user_by_phone_number',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_user_by_phone_number,
      callback);
};


/**
 * @param {!proto.common.StringValue} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserAccount>}
 *     Promise that resolves to the response
 */
proto.auth.AuthenticationServicePromiseClient.prototype.get_user_by_phone_number =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthenticationService/get_user_by_phone_number',
      request,
      metadata || {},
      methodDescriptor_AuthenticationService_get_user_by_phone_number);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.CountryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.CountryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.Empty,
 *   !proto.auth.CountryList>}
 */
const methodDescriptor_CountryService_get_countries = new grpc.web.MethodDescriptor(
  '/auth.CountryService/get_countries',
  grpc.web.MethodType.UNARY,
  common_pb.Empty,
  auth_pb.CountryList,
  /**
   * @param {!proto.common.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  auth_pb.CountryList.deserializeBinary
);


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.CountryList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.CountryList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.CountryServiceClient.prototype.get_countries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.CountryService/get_countries',
      request,
      metadata || {},
      methodDescriptor_CountryService_get_countries,
      callback);
};


/**
 * @param {!proto.common.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.CountryList>}
 *     Promise that resolves to the response
 */
proto.auth.CountryServicePromiseClient.prototype.get_countries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.CountryService/get_countries',
      request,
      metadata || {},
      methodDescriptor_CountryService_get_countries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.Country,
 *   !proto.common.Empty>}
 */
const methodDescriptor_CountryService_add_country = new grpc.web.MethodDescriptor(
  '/auth.CountryService/add_country',
  grpc.web.MethodType.UNARY,
  auth_pb.Country,
  common_pb.Empty,
  /**
   * @param {!proto.auth.Country} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.auth.Country} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.CountryServiceClient.prototype.add_country =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.CountryService/add_country',
      request,
      metadata || {},
      methodDescriptor_CountryService_add_country,
      callback);
};


/**
 * @param {!proto.auth.Country} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     Promise that resolves to the response
 */
proto.auth.CountryServicePromiseClient.prototype.add_country =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.CountryService/add_country',
      request,
      metadata || {},
      methodDescriptor_CountryService_add_country);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.common.StringValue,
 *   !proto.common.Empty>}
 */
const methodDescriptor_CountryService_remove_country = new grpc.web.MethodDescriptor(
  '/auth.CountryService/remove_country',
  grpc.web.MethodType.UNARY,
  common_pb.StringValue,
  common_pb.Empty,
  /**
   * @param {!proto.common.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.common.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.CountryServiceClient.prototype.remove_country =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.CountryService/remove_country',
      request,
      metadata || {},
      methodDescriptor_CountryService_remove_country,
      callback);
};


/**
 * @param {!proto.common.StringValue} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     Promise that resolves to the response
 */
proto.auth.CountryServicePromiseClient.prototype.remove_country =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.CountryService/remove_country',
      request,
      metadata || {},
      methodDescriptor_CountryService_remove_country);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.Country,
 *   !proto.common.Empty>}
 */
const methodDescriptor_CountryService_update_country = new grpc.web.MethodDescriptor(
  '/auth.CountryService/update_country',
  grpc.web.MethodType.UNARY,
  auth_pb.Country,
  common_pb.Empty,
  /**
   * @param {!proto.auth.Country} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.auth.Country} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.common.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.common.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.CountryServiceClient.prototype.update_country =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.CountryService/update_country',
      request,
      metadata || {},
      methodDescriptor_CountryService_update_country,
      callback);
};


/**
 * @param {!proto.auth.Country} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.common.Empty>}
 *     Promise that resolves to the response
 */
proto.auth.CountryServicePromiseClient.prototype.update_country =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.CountryService/update_country',
      request,
      metadata || {},
      methodDescriptor_CountryService_update_country);
};


module.exports = proto.auth;
