import requests
import io

# WebDAV 服务器的基本认证信息和远程文件路径
webdav_url = "http://localhost:5244/dav/README.md"
webdav_user = "yanshiqwq"
webdav_pass = "minecraft666"

# 本地文件路径
local_file_path = "README.md"

# 读取本地文件内容
with io.open(local_file_path, mode="r", encoding="utf-8") as f:
    file_content = f.read()

# 发送 PUT 请求将文件内容替换到远程 WebDAV 文件
response = requests.put(webdav_url, auth=(webdav_user, webdav_pass), data=file_content.encode("utf-8"))

# 输出请求的详细信息
print(f"请求 URL: {webdav_url}")
print(f"请求方法: PUT")

# 检查响应状态码，如果是 200 或 201 表示文件上传成功
if response.status_code in [200, 201]:
    print("文件上传成功")
    print(f"响应体信息：{response.text}")
else:
    print(f"文件上传失败，状态码：{response.status_code}")
    print(f"响应体信息：{response.text}")