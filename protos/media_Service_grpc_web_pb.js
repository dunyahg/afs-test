/**
 * @fileoverview gRPC-Web generated client stub for media
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: media_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var media_pb = require('./media_pb.js')
const proto = {};
proto.media = require('./media_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.media.MediaServiceClient =
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
proto.media.MediaServicePromiseClient =
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
 *   !proto.media.UploadMediaRequest,
 *   !proto.media.UploadMediaResponse>}
 */
const methodDescriptor_MediaService_upload_media = new grpc.web.MethodDescriptor(
  '/media.MediaService/upload_media',
  grpc.web.MethodType.UNARY,
  media_pb.UploadMediaRequest,
  media_pb.UploadMediaResponse,
  /**
   * @param {!proto.media.UploadMediaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  media_pb.UploadMediaResponse.deserializeBinary
);


/**
 * @param {!proto.media.UploadMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.UploadMediaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.UploadMediaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.MediaServiceClient.prototype.upload_media =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.MediaService/upload_media',
      request,
      metadata || {},
      methodDescriptor_MediaService_upload_media,
      callback);
};


/**
 * @param {!proto.media.UploadMediaRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.UploadMediaResponse>}
 *     Promise that resolves to the response
 */
proto.media.MediaServicePromiseClient.prototype.upload_media =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.MediaService/upload_media',
      request,
      metadata || {},
      methodDescriptor_MediaService_upload_media);
};


module.exports = proto.media;

