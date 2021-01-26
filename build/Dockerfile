FROM ubuntu:latest

# Clone repo
COPY . .

WORKDIR /DAppNodeDocs/

# Python and gitsetup
RUN apt-get update && apt-get install -y python3 && apt-get install -y python3-pip

# Install requirements
RUN pip3 install -r requirements.txt

# Edit mkdocs.yml to expose at port 8080
RUN echo "dev_addr: '0.0.0.0:8080'" >> mkdocs.yml

EXPOSE 8080

CMD ["mkdocs", "serve"]