start-server:
	grpcwebproxy --server_http_debug_port 3001 --backend_addr=168.220.87.14:443 --allow_all_origins --run_tls_server=false --use_websockets --backend_max_call_recv_msg_size=5242880 --websocket_compression_mode=disabled

.PHONY: start-server
