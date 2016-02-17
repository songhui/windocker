FROM stenode

# Create app directory
RUN powershell mkdir /Users/Public/nodesample
WORKDIR /Users/Public/nodesample

# Install app dependencies
COPY package.json /Users/Public/nodesample
RUN npm install

# Bundle app source
COPY *.* /Users/Public/nodesample/

#EXPOSE 8080
CMD ["npm", "start" ]
#ENTRYPOINT ["cmd.exe"]