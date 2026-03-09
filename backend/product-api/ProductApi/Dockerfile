FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ProductApi/ProductApi.csproj ProductApi/
RUN dotnet restore "ProductApi/ProductApi.csproj"

COPY . .
WORKDIR /src/ProductApi
RUN dotnet publish "ProductApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "ProductApi.dll"]

