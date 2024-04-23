//package com.luckyseven.notification.config;
//
//import com.mongodb.ConnectionString;
//import com.mongodb.MongoClientSettings;
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoClients;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.MongoDatabaseFactory;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
//import org.springframework.data.mongodb.core.convert.DbRefResolver;
//import org.springframework.data.mongodb.core.convert.DefaultDbRefResolver;
//import org.springframework.data.mongodb.core.convert.DefaultMongoTypeMapper;
//import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
//import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
//
//@Configuration
//public class MongoDBConfig {
//    @Value("${spring.data.mongodb.test.connectionString}")
//    private String connectionString;
//
//    public @Bean MongoClient mongoClient() {
//        MongoClient mongoClient = MongoClients.create(
//                MongoClientSettings.builder()
//                        .applyConnectionString(new ConnectionString(connectionString))
//                        .build());
//        return mongoClient;
//    }
////    @Bean
////    public MongoDatabaseFactory mongoDatabaseFactory() {
////        return new SimpleMongoClientDatabaseFactory(connectionString);
////    }
////
////    @Bean
////    public MongoTemplate mongoTemplate() {
////        return new MongoTemplate(mongoDatabaseFactory());
////    }
//}
