//package com.luckyseven.SCG.config;
//
////import com.orange.fintech.jwt.JWTFilter;
//import com.luckyseven.SCG.jwt.JWTUtil;
//import com.luckyseven.SCG.jwt.JwtAuthenticationFilter;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//
//import java.util.Collections;
//
//@Configuration
//@RequiredArgsConstructor
//@EnableWebSecurity
//public class SecurityConfig {
//
////    private final JWTFilter jwtFilter;
//    private final JwtAuthenticationFilter jwtAuthenticationFilter;
//    private final JWTUtil jwtUtil;
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
//
//        return configuration.getAuthenticationManager();
//    }
//
//    @Bean
//    public BCryptPasswordEncoder bCryptPasswordEncoder() {
//
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//                .cors((cors) -> cors
//                        .configurationSource(new CorsConfigurationSource() {
//                            @Override
//                            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
//                                CorsConfiguration configuration = new CorsConfiguration();
//
//                                configuration.setAllowedOrigins(Collections.singletonList("http://localhost:5000"));
//                                configuration.setAllowedMethods(Collections.singletonList("*"));
//                                configuration.setAllowCredentials(true);
//                                configuration.setAllowedHeaders(Collections.singletonList("*"));
//                                configuration.setMaxAge(3600L);
//                                configuration.setExposedHeaders(Collections.singletonList("Set-Cookie"));
//                                configuration.setExposedHeaders(Collections.singletonList("Authorization"));
//
//                                return configuration;
//
//                            }
//                        }));
//        http
//                .csrf((auth) -> auth.disable());
//
//        http
//                .formLogin((auth) -> auth.disable());
//
//        http
//                .httpBasic((auth) -> auth.disable());
//
//
//        http
//                .authorizeHttpRequests((auth) -> auth
//                        .requestMatchers("/","/swagger-resources/**", "/v3/api-docs/**", "/swagger-ui/**", "/api/v1/auth/**","/api/v1/auth/test", "/api/v1/test").permitAll()
//                        .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
//
//                        .requestMatchers("/api/v1/groups/**","/api/v1/members/**","/api/v1/payments/**","/api/v1/account/**","/api/v1/maps/**","/api/v1/notification").hasRole("USER")
//                        .anyRequest().authenticated());
//
//
//        http
//                .sessionManagement((session) -> session
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//        //JWTFilter 추가
//        http
//                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//}